// app/login/page.tsx
"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", { username, password });
      console.log(response.data.message ); // Access the message from response.data
      // Redirect or update UI on successful login
      router.push("/"); // or whichever page you'd like to navigate to after login
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 p-2 w-full border rounded"
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 p-2 w-full border rounded"
          placeholder="Password"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
