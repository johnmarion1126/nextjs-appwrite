"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { Axios } from "axios";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {

  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-2">
      <h1>Login</h1>
      <hr />

      <label htmlFor="email">email</label>
      <input
        className="p-2"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({
          ...user,
          email: e.target.value
        })}
        placeholder="email"
      />

      <label htmlFor="password">password</label>
      <input
        className="p-2"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({
          ...user,
          password: e.target.value
        })}
        placeholder="password"
      />

      <button
        type="button"
        onClick={onLogin}
        className="p-2 border border-gray-300 mt-4"
      >
        Login Here
      </button>
      <Link href="/signup">
        Visit Signup Page
      </Link>
    </div>
  )
}