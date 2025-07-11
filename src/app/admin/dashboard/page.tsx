import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/admin/login");
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h1>
        <p className="mb-4 text-center">Welcome, {session.user?.name || session.user?.email}!</p>
        <div className="text-center text-gray-500">Project management features coming soon...</div>
      </div>
    </div>
  );
} 