import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function HomePage() {
  const authenticated = true;

  if (!authenticated) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      Data Management System Barzadata (habib)
      <p>Examples:</p>
      <div className="flex flex-row gap-4 underline ">
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
        <Link href="/onboarding">Onboarding</Link>
      </div>
    </main>
  );
}
