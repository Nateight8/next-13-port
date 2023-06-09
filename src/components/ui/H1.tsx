import { cn } from "@/src/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const H1Variant = cva(" ", {
  variants: {
    size: {
      default: "",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface H2Heading
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof H1Variant> {}

const H1 = forwardRef<HTMLHeadingElement, H2Heading>(
  ({ children, className, size, ...props }, ref) => {
    return (
      <div className="py-1">
        <h1
          style={{ fontSize: "6rem", color: "whitesmoke", lineHeight: 1 }}
          ref={ref}
          {...props}
          className={cn(H1Variant({ size, className }))}
        >
          {children}
        </h1>
      </div>
    );
  }
);

H1.displayName = "H1";

export { H1, H1Variant };
