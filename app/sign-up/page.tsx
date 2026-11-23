import type { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function Page() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <SignUp />
    </main>
  );
}