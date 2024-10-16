"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { signOut } from "@/lib/utils/auth";

const ManageAccountDropdown = () => {
  const { toast } = useToast();
  const router = useRouter();

  const logOut = async () => {
    return signOut(() => {
      router.push("/signin");
      toast({
        title: "Logged out",
        description: "You have successfully logged out of your account",
        variant: "default",
        duration: 2000,
      });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="-m-1.5 flex items-center">
        <span className="sr-only">Open user menu</span>
        <Avatar>
          <AvatarFallback />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-2">
        <DropdownMenuItem asChild>
          <Link href="/account/settings" className="w-full cursor-pointer">
            Manage account
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logOut}>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ManageAccountDropdown;
