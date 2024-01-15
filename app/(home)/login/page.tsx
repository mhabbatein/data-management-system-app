import { LoginForm } from "@/components/LoginForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      {/* Login Box */}
      <section className="flex flex-col items-center gap-6 rounded-lg border border-input p-4">
        <LoginForm />
        <p className="text-sm">Atau</p>
        <Button className="w-full">Login melalui Google</Button>
      </section>
    </div>
  );
}
