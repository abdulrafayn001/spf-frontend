import React from "react";
import NavigationWrapper from "./_components/navigation-wrapper";

interface Props {
  children: React.ReactNode;
}

export const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <NavigationWrapper />

      <div className="lg:pl-72">
        <div>{children}</div>
      </div>
    </>
  );
};
