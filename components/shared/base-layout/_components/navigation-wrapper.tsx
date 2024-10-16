"use client";

import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import DesktopNavigation from "./desktop-navigation";
import MobileNavigation from "./mobile-navigation";
import NavigationTopbar from "./navigation-topbar";
import { useState } from "react";
import { getQueryClient } from "@/lib/utils/queryClient";

const NavigationWrapper = () => {
  const queryClient = getQueryClient();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <MobileNavigation isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
      <DesktopNavigation />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NavigationTopbar setMobileMenuOpen={setMobileMenuOpen} />
      </HydrationBoundary>
    </>
  );
};

export default NavigationWrapper;
