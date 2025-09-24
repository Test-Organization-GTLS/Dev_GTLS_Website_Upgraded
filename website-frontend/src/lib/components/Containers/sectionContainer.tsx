import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SectionContainer = ({ children }: Props) => {
  return (
    <div className="w-full h-full py-20">
      {children}
    </div>
  );
};

export default SectionContainer;
