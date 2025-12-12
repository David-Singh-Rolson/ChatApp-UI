import Input from "@/components/ui/Input";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PasswordIcon from '@mui/icons-material/Password';
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Attempt register:", { name, email, password });
  };

  return (
    <form onSubmit={submit} className="space-y-5">
        <div>
        <Input
          label="Name"
          type="text"
          required
          className="mt-1"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon={
            <PersonOutlineIcon />
          }
        />
      </div>
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
          icon={
            <MailOutlineIcon />
          }
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
          icon={
            <PasswordIcon />
          }
        />
      </div>

      {/* Button */}
      <Button
        type="submit"
      >
        Login
      </Button>
    </form>

  );
}