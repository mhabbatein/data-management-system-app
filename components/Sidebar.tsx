import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const links: { title: string; href: string }[] = [
  {
    title: "Beranda",
    href: "/",
  },
  {
    title: "Grafik",
    href: "/filter/grafik",
  },
  {
    title: "List Penerima Beasiswa",
    href: "/filter/list-penerima-beasiswa",
  },
  {
    title: "Sebaran Kampus",
    href: "/filter/sebaran-kampus",
  },
  {
    title: "Sebaran Jurusan",
    href: "/filter/sebaran-jurusan",
  },
  {
    title: "Sebaran Pekerjaan",
    href: "/filter/sebaran-pekerjaan",
  },
  {
    title: "Kawan Barzada",
    href: "/filter/kawan-barzada",
  },
  {
    title: "Komunitas",
    href: "/filter/komunitas",
  },
];

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild className="block sm:hidden">
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <div className="flex flex-row items-center justify-between">
          <SheetClose asChild>
            <Link
              href="/"
              className="bg-gradient-to-br from-black to-gray-500 bg-clip-text text-2xl font-bold text-transparent dark:from-gray-400 dark:to-gray-700"
            >
              Barzadata
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="outline" size="icon">
              <X />
            </Button>
          </SheetClose>
        </div>
        <div className="mt-4 flex flex-col gap-y-4">
          {links.map((link) => (
            <SheetClose asChild key={link.title}>
              <Link href={link.href}>{link.title}</Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
