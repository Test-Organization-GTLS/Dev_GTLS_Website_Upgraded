import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="w-full h-full xl:max-w-5xl 2xl:max-w-7xl mx-auto">
      {children}
    </div>
  );
};

export default Container;
