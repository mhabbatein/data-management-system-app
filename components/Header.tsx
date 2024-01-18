import React from "react";
import { ModeToggle } from "./ModeToggle";
import { Menu } from "./NavigationMenu";
import Link from "next/link";
import { Sidebar } from "./Sidebar";

export default function Header() {
  return (
    <nav className="border-b p-4">
      <div className="flex flex-row items-center justify-between gap-x-2">
        <div className="flex flex-row items-center gap-x-4">
          <Link
            href="/"
            className="bg-gradient-to-br from-black to-gray-500 bg-clip-text text-2xl font-bold text-transparent dark:from-gray-400 dark:to-gray-700"
          >
            Barzadata
          </Link>
          <Menu />
        </div>
        <div className="flex flex-row items-center gap-x-2 sm:gap-x-4">
          <ModeToggle />
          <Sidebar />
        </div>
      </div>
    </nav>
  );
}
