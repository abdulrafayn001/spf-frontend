import {
  HomeIcon,
  UserIcon,
  CreditCardIcon,
  ChartBarIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

export type NavigationItem = {
  name: string;
  href: string;
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
      React.RefAttributes<SVGSVGElement>
  >;
};

export const navigation: NavigationItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Profile", href: "/dashboard/profile", icon: UserIcon },
  { name: "Accounts", href: "/accounts", icon: CreditCardIcon },
  { name: "Analytics", href: "/analytics", icon: ChartBarIcon },
  { name: "Settings", href: "/settings", icon: CogIcon },
];

export const userNavigation = [
  { name: "Your Profile", href: "/profile" },
  { name: "Settings", href: "/settings" },
  { name: "Sign out", href: "/auth/signout" },
];
