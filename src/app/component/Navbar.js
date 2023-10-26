"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function Navbar() {
  const router = useRouter();
  return (
    <header>
      <Link href="/">
        <h1>Rofe Ferreteria</h1>
      </Link>
      <div>
        <button onClick={() => router.push("/api/form")}>Add Material</button>
      </div>
    </header>
  );
}
