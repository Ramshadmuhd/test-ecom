import React from "react";

const variantClasses = {
  h1: "font-medium sm:text-[38px] md:text-[44px] text-[48px]",
  h2: "font-medium sm:text-[31px] md:text-[33px] text-[35px]",
  h3: "font-semibold sm:text-[26px] md:text-[28px] text-[30px]",
  h4: "font-medium text-[18px]",
  h5: "text-[14px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
