"use client";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import DesktopNavigation from "./desktop-navigation";
import MobileNavigation from "./mobile-navigation";
import NavigationTopbar from "./navigation-topbar";
import { useState } from "react";

const NavigationWrapper = () => {
  const queryClient = new QueryClient();

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
