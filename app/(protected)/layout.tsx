import ProtectedRouteProvider from "@/providers/ProtectedRouteProvider";
import React from "react";
import { ReactNode } from "react";

type ProtectedLayoutProps = {
  children: ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return <ProtectedRouteProvider>{children}</ProtectedRouteProvider>;
};

export default ProtectedLayout;
