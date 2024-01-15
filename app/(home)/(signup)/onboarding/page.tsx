import { redirect } from "next/navigation";
import React from "react";

export default function OnboardingPage() {
  const signedUp = false;

  if (!signedUp) {
    redirect("/signup");
  }
  return <div>OnboardingPage</div>;
}
