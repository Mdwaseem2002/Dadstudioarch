import type { Metadata } from "next";
import AdminDashboard from "./AdminDashboard";

export const metadata: Metadata = {
  title: "Admin Panel | DADSTUDIOARCH",
  description: "Admin panel for managing DADSTUDIOARCH projects and content.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminDashboard />;
}
