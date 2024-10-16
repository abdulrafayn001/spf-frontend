"use client";

import { useUser } from "@/hooks/useUser";
import { isAuthenticated } from "@/lib/utils/auth";
import { getQueryClient } from "@/lib/utils/queryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
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
  const { getUserInfo } = useUser();

  useEffect(() => {
    const checkAuth = () => {
      const isAuthPage = pathname === "/login" || pathname === "/signup";
      if (!isAuthenticated() && !isAuthPage) {
        router.push("/signin");
      } else if (isAuthenticated() && isAuthPage) {
        router.push("/dashboard");
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [router, pathname]);

  if (isLoading) {
    return null; // or a loading spinner
  }

  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(getUserInfo);

  if (!isAuthenticated() && pathname !== "/login" && pathname !== "/signup") {
    return null;
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default ProtectedRouteProvider;
