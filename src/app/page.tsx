"use client";

import { Button } from "~/components/ui/button";
import { authClient } from "~/lib/auth-client";

export default function Home() {
  const handleLogout = async () => {
    await authClient.signOut();

    alert("signed out");
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">Merdeka!!</h1>
      <Button onClick={handleLogout}>Sign out</Button>
    </div>
  );
}
