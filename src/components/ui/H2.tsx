import { cn } from "@/src/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const H2Variant = cva(" ", {
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
    VariantProps<typeof H2Variant> {}

const H2 = forwardRef<HTMLHeadingElement, H2Heading>(
  ({ children, className, size, ...props }, ref) => {
    return (
      <div className="">
        <h2
          style={{ fontSize: "2rem", color: "whitesmoke", lineHeight: 1.1 }}
          ref={ref}
          {...props}
          className={cn(H2Variant({ size, className }))}
        >
          {children}
        </h2>
      </div>
    );
  }
);

H2.displayName = "H2";

export { H2, H2Variant };
