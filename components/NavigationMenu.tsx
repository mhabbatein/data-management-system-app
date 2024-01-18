"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Universitas",
    href: "/filter/universitas",
    description:
      "Mencari teman-teman seangkatan yang kuliah di tempat yang sama atau di lokasi terdekat",
  },
  {
    title: "Jurusan",
    href: "/filter/jurusan",
    description:
      "Mencari teman-teman seangkatan yang menempuh jurusan yang sama",
  },
  {
    title: "Hobi",
    href: "/filter/hobi",
    description:
      "Mencari teman-teman seangkatan yang memilik hobi/passion yang sama",
  },
  {
    title: "Peraih Beasiswa",
    href: "/filter/peraih-beasiswa",
    description:
      "Mencari teman-teman seangkatan yang mendapatkan beasiswa di kampus/institusi tertentu",
  },
];

export function Menu() {
  return (
    <NavigationMenu className="hidden sm:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Kategori</NavigationMenuTrigger>
          <NavigationMenuContent className="z-10">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
