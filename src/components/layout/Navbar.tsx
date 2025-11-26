"use client";

import {
  LogInIcon,
  MenuIcon,
  Search,
  ShoppingCart,
  UserRoundPlus,
} from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";

const navigationItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/",
  },
  {
    label: "Orders",
    href: "/",
  },
  {
    label: "Admin",
    href: "/",
  },
];

const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="lg:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>

        <div className="px-4 grid grid-cols-1 gap-6">
          {navigationItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}

          <Link href="/login">Sign In</Link>
          <Link href="/register">Sign Up</Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

type SearchCommandDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const SearchCommandDialog = ({
  onOpenChange,
  open,
}: SearchCommandDialogProps) => {
  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("Search submitted");
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <form onSubmit={handleSearchSubmit}>
        <CommandInput placeholder="Type a command or search..." />
      </form>
    </CommandDialog>
  );
};

export const Navbar = () => {
  const [searchCommandDialogIsOpen, setSearchCommandDialogIsOpen] =
    useState(false);

  return (
    <nav
      className={cn(
        "bg-background/50 backdrop-blur-md",
        "w-full border-b h-16 py-2 px-8",
        "sticky top-0 z-50",
        "flex items-center justify-between"
      )}
    >
      {/* Left Side */}
      <div className="flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2">
          <ShoppingCart className="text-primary" />
          <h1 className="text-xl font-bold">LilPedia</h1>
        </Link>

        <div className="font-medium gap-4 text-sm hidden lg:flex">
          {navigationItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <InputGroup className="w-80 hidden lg:flex">
          <InputGroupAddon>
            <Search className="text-primary" />
          </InputGroupAddon>

          <InputGroupInput placeholder="Search products..." />
        </InputGroup>

        <Button
          onClick={() => setSearchCommandDialogIsOpen(true)}
          size="icon"
          variant="ghost"
          className="lg:hidden"
        >
          <Search />
        </Button>

        <Button size="icon" variant="ghost">
          <ShoppingCart />
        </Button>

        <NavigationSheet />

        <div className="items-center gap-2 justify-between hidden lg:flex">
          <Link href="/login">
            <Button variant="ghost">
              <LogInIcon />
              Sign In
            </Button>
          </Link>

          <Link href="/register">
            <Button>
              <UserRoundPlus />
              Sign Up
            </Button>
          </Link>
        </div>
      </div>

      <SearchCommandDialog
        open={searchCommandDialogIsOpen}
        onOpenChange={setSearchCommandDialogIsOpen}
      />
    </nav>
  );
};
