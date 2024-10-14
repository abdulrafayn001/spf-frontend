"use client";

import { isAuthenticated } from "@/lib/utils/auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRouteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isAuthPage = pathname === "/login" || pathname === "/signup";
    if (!isAuthenticated() && !isAuthPage) {
      router.push("/signin");
    } else if (isAuthenticated() && isAuthPage) {
      router.push("/profile");
    }
  }, [router, pathname]);

  if (!isAuthenticated() && pathname !== "/login" && pathname !== "/signup") {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRouteProvider;
