"use client";

import { isAuthenticated } from "@/lib/utils/auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProtectedRouteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const isAuthPage = pathname === "/login" || pathname === "/signup";
      if (!isAuthenticated() && !isAuthPage) {
        router.push("/signin");
      } else if (isAuthenticated() && isAuthPage) {
        router.push("/profile");
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [router, pathname]);

  if (isLoading) {
    return null; // or a loading spinner
  }

  if (!isAuthenticated() && pathname !== "/login" && pathname !== "/signup") {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRouteProvider;
