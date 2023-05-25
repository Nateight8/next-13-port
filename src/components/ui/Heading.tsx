import { cn } from "@/src/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const headingVariant = cva(" text-xs text-primary tracking-widest uppercase", {
  variants: {
    size: {
      default: "text-sm",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface H2Heading
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariant> {}

const Heading = forwardRef<HTMLHeadingElement, H2Heading>(
  ({ children, className, size, ...props }, ref) => {
    return (
      <div className="">
        <h2
          ref={ref}
          {...props}
          className={cn(headingVariant({ size, className }))}
        >
          {children}
        </h2>
      </div>
    );
  }
);

Heading.displayName = "Heading";

export { Heading, headingVariant };
