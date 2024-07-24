import React from "react";

function Button({ variant, children, className }) {
  return <button className={`btn btn-primary ${className}`}>{children}</button>;
}

export default Button;
