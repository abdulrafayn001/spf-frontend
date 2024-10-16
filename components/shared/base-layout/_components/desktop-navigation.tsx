"use client";

import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { navigation } from "@/lib/utils/navigationConfig";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopNavigation = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 pt-4">
          <div className="flex h-16 shrink-0 items-center">
            <Link href={"/"}>
              <div className="flex items-center space-x-2">
                <Icons.logo className="h-8 w-8" color="white" />
                <span className="text-lg font-medium text-white">
                  Smart Personal Finance
                </span>
              </div>
            </Link>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation &&
                    navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={cn(
                            pathname === item.href
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:text-white hover:bg-gray-800",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                        >
                          <item.icon
                            className="h-6 w-6 shrink-0"
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default DesktopNavigation;
