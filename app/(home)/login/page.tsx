import { GridBackground } from "@/components/GridBackground";
import { LoginForm } from "@/components/LoginForm";
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-72px)] items-center justify-center bg-[#f3f4f6] dark:bg-slate-900 md:min-h-screen">
      <GridBackground>
        <LoginForm />
      </GridBackground>
    </div>
  );
}
