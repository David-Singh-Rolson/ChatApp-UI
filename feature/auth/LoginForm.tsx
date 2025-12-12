"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import PasswordIcon from "@mui/icons-material/Password";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Button from "@/components/ui/Button";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    // ⚠️ NO BACKEND YET (as per your request)
    console.log("Attempt login:", { email, password });

    // later we will integrate: POST /auth/login → JWT
  };

  return (
    <form onSubmit={submit} className="space-y-5">
      {/* Email */}
      <div>
        <Input
          label="Email"
          type="email"
          required
          className="mt-1"
          placeholder="johan@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<MailOutlineIcon />}
        />
      </div>

      {/* Password */}
      <div>
        <Input
          label="Password"
          type="password"
          required
          className="mt-1"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<PasswordIcon />}
        />
      </div>

      {/* Button */}
      <Button variant="primary">Login</Button>
    </form>
  );
}
