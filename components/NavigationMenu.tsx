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
    title: "Beranda",
    href: "/",
    description: "Halaman Beranda website Manajemen dan Grafis Data Barzada31",
  },
  {
    title: "Grafik",
    href: "/filter/grafik",
    description: "Grafis persebaran teman-teman Barzada31 di seluruh dunia",
  },
  {
    title: "List Penerima Beasiswa",
    href: "/filter/list-penerima-beasiswa",
    description:
      "List penerima beasiswa dari teman-teman Barzada31 di seluruh dunia",
  },
  {
    title: "Sebaran Kampus",
    href: "/filter/sebaran-kampus",
    description: "List Sebaran Kampus studi lanjut teman-teman Barzada31",
  },
  {
    title: "Sebaran Jurusan",
    href: "/filter/sebaran-jurusan",
    description:
      "List Sebaran Jurusan pada kampus studi lanjut teman-teman Barzada31",
  },
  {
    title: "Sebaran Pekerjaan",
    href: "/filter/sebaran-pekerjaan",
    description: "List Sebaran Pekerjaan teman-teman Barzada31",
  },
  {
    title: "Kawan Barzada",
    href: "/filter/kawan-barzada",
    description: "Pencarian detail kawan Barzada31 di seluruh dunia ",
  },
  {
    title: "Komunitas",
    href: "/filter/komunitas",
    description:
      "Selalu terkoneksi dengan teman-teman Barzada31 di seluruh dunia",
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
