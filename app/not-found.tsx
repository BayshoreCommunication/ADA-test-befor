"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NotFound = () => {
  const router = useRouter();

  // auto redirect to home page
  useEffect(() => {
    setTimeout(() => {
      router.back();
    }, 1000);
  }, [router]);

  return (
    <div className="h-screen justify-center items-center">
      <h1 className="text-center text-3xl font-bold mt-20">
        Page not found, redirecting...
      </h1>
      <button className="btn mt-10 mx-auto" onClick={() => router.back()}>
        Go back
      </button>
    </div>
  );
};

export default NotFound;
