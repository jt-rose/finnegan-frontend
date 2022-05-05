import { ReactNode } from "react";

export const Layout = (props: { children: ReactNode }) => {
  return <div>{props.children}</div>;
};
