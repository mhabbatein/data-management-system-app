import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <TooltipProvider>
      <div className="flex flex-col-reverse items-center justify-between gap-y-2 border-t px-4 py-4 sm:flex-row sm:gap-y-0 sm:px-12 sm:py-8">
        <p className="text-sm font-medium text-slate-500">
          Created by Barzada Tech Pioneers X SatuHaluan
        </p>
        <div className="flex flex-row items-center gap-x-4">
          <Tooltip>
            <TooltipTrigger>
              <Link href="https://github.com/mhabbatein">
                <FaGithub size={24} />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Akun Github Habib</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Link href="https://github.com/marifat0">
                <FaGithub size={24} color="#1338be" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Akun Github Kang Marifat</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
