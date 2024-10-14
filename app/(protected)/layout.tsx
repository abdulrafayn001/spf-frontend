import { BaseLayout } from "@/components/shared/base-layout/base-layout";
import ProtectedRouteProvider from "@/providers/ProtectedRouteProvider";
import React from "react";
import { ReactNode } from "react";

type ProtectedLayoutProps = {
  children: ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <ProtectedRouteProvider>
      <BaseLayout>{children}</BaseLayout>
    </ProtectedRouteProvider>
  );
};

export default ProtectedLayout;
