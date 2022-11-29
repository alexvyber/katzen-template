import glob from "fast-glob"
import * as path from "path"

async function importArticle(testFileName) {
  let { meta, default: component } = await import(
    `../pages/tests/${testFileName}`
  )
  return {
    slug: testFileName.replace(/(\/index)?\.mdx$/, ""),
    ...meta,
    component,
  }
}

export async function getAllTests() {
  let articleFilenames = await glob(["*.mdx", "*/index.mdx"], {
    cwd: path.join(process.cwd(), "src/pages/tests"),
    ignore: ["_*.mdx", "_index.mdx"],
  })

  let tests = await Promise.all(articleFilenames.map(importArticle))

  return tests.sort((a, z) => new Date(z.date) - new Date(a.date))
}
