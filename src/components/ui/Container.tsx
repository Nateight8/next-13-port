import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id?: string;
};

// function Container({ children, id }: Props) {
//   return (
//     <section className="max-w-6xl mx-auto w-full h-screen" id={id}>
//       {children}
//     </section>
//   );
// }

// export default Container;

import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/src/lib/utils";

const containerVariants = cva("max-w-6xl px-4 mx-auto w-full");

interface SectionProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof containerVariants> {}

const Container = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        {...props}
        className={cn(containerVariants({ className }))}
      >
        {children}
      </section>
    );
  }
);

Container.displayName = "H4";

export { Container, containerVariants };
