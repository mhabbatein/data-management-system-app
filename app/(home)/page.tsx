import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function HomePage() {
  const authenticated = true;

  if (!authenticated) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-[calc(100vh-72px)] flex-col items-center justify-center md:min-h-screen">
      <h2 className="text-3xl font-semibold">Dashboard Utama</h2>
      <p>Data Management System Barzadata (habib)</p>
      <p>Examples:</p>
      <div className="flex flex-row gap-4 underline ">
        <Link href="/login">Login</Link>
      </div>
    </main>
  );
}
