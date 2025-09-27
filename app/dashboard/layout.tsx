import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    return redirect("/login");
  }

  return (
    <div className="flex h-screen w-screen bg-gray-100 dark:bg-neutral-900">
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
}
