"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function SignInBtn() {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center gap-4 pl-3 rounded-lg shadow-xl"
    >
      <Image src="/google.jpg" height={50} width={50} />
      <span className="px-4 py-3 text-white bg-blue-500">
        Sign in with Google
      </span>
    </button>
  );
}