import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-screen-xl px-4 mx-auto lg:px-6">{children}</div>;
};

export default Container;
