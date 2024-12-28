"use client";
import { signIn } from "next-auth/react";

const GoogleLoginButton = () => (
  <button onClick={() => signIn("google", { callbackUrl: '/' })}>
    Sign in with Google
  </button>
);

export default GoogleLoginButton;