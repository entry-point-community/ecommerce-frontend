"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { authClient } from "~/lib/auth-client";
import { LoginForm } from "../components/LoginForm";

const LoginPage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (session) {
      router.replace("/");
    }
  }, [session, router]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center w-full ">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
