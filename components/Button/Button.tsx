import React from "react";

function Button({
  children,
  className,
  ...otherProps
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`px-3 py-2 text-gray-500 bg-gray-200 rounded-full cursor-pointer ${className}`}
      {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
