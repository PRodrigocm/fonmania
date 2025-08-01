"use client";
import { Suspense } from "react";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
} 