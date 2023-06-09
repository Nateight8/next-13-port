import { cn } from "@/src/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const pVariant = cva(" text-3xl  font-heading text-gray-200", {
  variants: {
    size: {
      default: "text-3xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface H2Heading
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof pVariant> {}

const P = forwardRef<HTMLParagraphElement, H2Heading>(
  ({ children, className, size, ...props }, ref) => {
    return (
      <div className="">
        <p ref={ref} {...props} className={cn(pVariant({ size, className }))}>
          {children}
        </p>
      </div>
    );
  }
);

P.displayName = "P";

export { P, pVariant };
