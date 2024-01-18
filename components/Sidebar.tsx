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
          <SheetClose asChild>
            <Link href="/filter/universitas">Universitas</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/filter/hobi">Hobi</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/filter/jurusan">Jurusan</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/filter/peraih-beasiswa">Peraih Beasiswa</Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
