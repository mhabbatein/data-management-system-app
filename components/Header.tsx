import React from "react";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <nav className="border-b p-4">
      <ModeToggle />
    </nav>
  );
}
