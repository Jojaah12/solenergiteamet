import { ReactNode } from "react";

interface GridContainerProps {
  children: ReactNode;
}
function GridContainer({ children }: GridContainerProps) {
  return (
    <div className=" flex flex-wrap overflow-hidden w-fill h-[500px] relative">
      {children}
    </div>
  );
}

export default GridContainer;
