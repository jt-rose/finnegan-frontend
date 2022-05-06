import { ReactNode } from "react";
import { Navbar } from "./Navbar";

export const Layout = (props: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
};
