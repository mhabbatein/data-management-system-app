import { GridBackground } from "@/components/GridBackground";
import { LoginForm } from "@/components/LoginForm";
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f3f4f6] dark:bg-slate-900">
      <GridBackground>
        <LoginForm />
      </GridBackground>
    </div>
  );
}
