import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

function Button({
  children,
  className,
  ...otherProps
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`px-3 py-2 text-gray-500 bg-gray-200 rounded-full cursor-pointer ${className} focus:outline-none`}
      {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
