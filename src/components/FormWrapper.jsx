import { Children } from "react";

export function FormWrapper({ title, subtitle, children }) {
  return (
    <>
      <div className="p-3">
        <h1 className="text-center text-2xl font-bold mb-1">{title}</h1>
        <p className="text-center text-gray">{subtitle}</p>
        <div>{children}</div>
      </div>
    </>
  );
}
