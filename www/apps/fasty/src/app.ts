import AutoLoad, { AutoloadPluginOptions } from "@fastify/autoload"
import { join } from "path"

import { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify"
import mercurius, {
  IFieldResolver,
  IResolvers,
  MercuriusContext,
  MercuriusLoaders,
} from "mercurius"

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>

// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {}

const buildContext = async (req: FastifyRequest, _reply: FastifyReply) => {
  return {
    authorization: req.headers.authorization,
  }
}

type PromiseType<T> = T extends PromiseLike<infer U> ? U : T

declare module "mercurius" {
  interface MercuriusContext
    extends PromiseType<ReturnType<typeof buildContext>> {}
}

const schema = `
type Human {
  name: String!
}

type Dog {
  name: String!
  owner: Human
}

type Query {
  helloTyped: String!
  helloInline: String!
  dogs: [Dog!]!
}

type Subscription {
  newNotification: String!
}

type Mutation {
  createNotification(message: String!): Boolean!
}
`

const helloTyped: IFieldResolver<
  {} /** Root */,
  MercuriusContext /** Context */,
  {} /** Args */
> = (root, args, ctx, info) => {
  // root ~ {}
  root
  // args ~ {}
  args
  // ctx.authorization ~ string | undefined
  ctx.authorization
  // info ~ GraphQLResolveInfo
  info

  return "world"
}

const NOTIFICATION = "notification"

const dogs = [
  { name: "Max" },
  { name: "Charlie" },
  { name: "Buddy" },
  { name: "Max" },
  { name: "Max" },
  { name: "Max" },
  { name: "Max" },
  { name: "Max" },
  { name: "Max" },
]

const resolvers: IResolvers = {
  Query: {
    helloTyped,
    helloInline: (root: {}, args: {}, ctx, info) => {
      // root ~ {}
      root
      // args ~ {}
      args
      // ctx.authorization ~ string | undefined
      ctx.authorization
      // info ~ GraphQLResolveInfo
      info

      return "world"
    },
    dogs: (_root, _args, _ctx_, _info) => dogs,
  },
  Mutation: {
    createNotification(_root, { message }: { message: string }, { pubsub }) {
      pubsub.publish({
        topic: NOTIFICATION,
        payload: {
          newNotification: message,
        },
      })
      return true
    },
  },
  Subscription: {
    newNotification: {
      subscribe: (_root, _args, { pubsub }) => {
        return pubsub.subscribe(NOTIFICATION)
      },
    },
  },
}

const loaders: MercuriusLoaders = {
  Dog: {
    async owner(queries, _ctx) {
      return queries.map(
        ({ obj }: { obj: { name: string } }) => owners[obj.name],
      )
    },
  },
}

const owners: Record<string, { name: string }> = {
  Max: {
    name: "Jennifer",
  },
  Charlie: {
    name: "Sarah",
  },
  Buddy: {
    name: "Tracy",
  },
}

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts,
): Promise<void> => {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "plugins"),
    options: opts,
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "routes"),
    options: opts,
  })

  // mer
  void fastify.register(mercurius, {
    schema,
    resolvers,
    context: buildContext,
    subscription: true,
    loaders,
  })
}

export default app
export { app, options }
