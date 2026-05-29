"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function CreateBountyPage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const userRole = (session?.user as { role?: string } | undefined)?.role as
    | "sponsor"
    | "contributor"
    | undefined;

  useEffect(() => {
    // Redirect to /bounty if the user is not a sponsor
    if (!isPending && userRole !== "sponsor") {
      router.push("/bounty");
    }
  }, [userRole, isPending, router]);

  // Show nothing while checking auth or redirecting
  if (isPending || userRole !== "sponsor") {
    return null;
  }

  // TODO: Implement the bounty creation form here
  return (
    <div className="container max-w-2xl py-8">
      <h1 className="text-3xl font-bold mb-8">Create a Bounty</h1>
      {/* Form will be added here */}
      <p className="text-muted-foreground">Coming soon...</p>
    </div>
  );
}
