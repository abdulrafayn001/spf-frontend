"use client";

import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ManageAccountDropdown from "./manage-account-dropdown";

interface NavigationTopbarProps {
  setMobileMenuOpen: (open: boolean) => void;
}

const NavigationTopbar: React.FC<NavigationTopbarProps> = ({
  setMobileMenuOpen,
}) => {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-border/40 bg-background px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 lg:py-4">
      <Button
        type="button"
        aria-label="Open sidebar"
        aria-hidden="true"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </Button>

      <Separator
        orientation="vertical"
        className="lg:hidden"
        aria-hidden="true"
      />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="relative flex flex-1"></div>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <Button
            variant="ghost"
            size="icon"
            className="-mr-2 text-muted-foreground hover:text-foreground"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </Button>

          <Separator orientation="vertical" className="h-6" />

          <ManageAccountDropdown />
        </div>
      </div>
    </div>
  );
};

export default NavigationTopbar;
