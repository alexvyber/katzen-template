import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

// -------------------

const className =
  "flex justify-center items-center py-3 px-8 text-xl font-semibold transition duration-1000 ease-in-out delay-100 md:py-4 md:px-10 md:text-2xl";

const buttonStyles = cva(className, {
  variants: {
    intent: {
      primary:
        "bg-orange-500 text-white hover:bg-orange-600 hover:text-orange-100 hover:scale-105",
      secondary:
        "bg-zinc-100 text-zinc-600 hover:bg-orange-50 hover:text-black",
    },
    rounded: {
      full: "rounded-full",
      brand: "rounded-[13px]",
    },
  },
  defaultVariants: {
    intent: "primary",
    rounded: "brand",
  },
});

// -------------------

export interface Props extends VariantProps<typeof buttonStyles> {
  href: string;
}

export const Button = ({
  intent,
  children,
  rounded,
  href,
}: PropsWithChildren<Props>) => {
  return (
    <a
      href={href}
      className={buttonStyles({ intent, rounded })}
    >
      {children}
    </a>
  );
};