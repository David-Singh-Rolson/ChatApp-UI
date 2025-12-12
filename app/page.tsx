import { redirect } from "next/navigation";

export default function Home() {
  // For now always redirect to login
  redirect("/auth/login");
}
