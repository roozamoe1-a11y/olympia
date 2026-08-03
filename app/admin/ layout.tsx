import type { ReactNode } from "react";
import Sidebar from "@/app/components/admin/Sidebar";
import Header from "@/app/components/admin/Header";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">

      <div className="flex">

        {/* Sidebar */}
        <aside className="hidden lg:block w-72 border-r border-zinc-800">
          <Sidebar />
        </aside>

        {/* Content */}
        <div className="flex-1 flex flex-col min-h-screen">

          {/* Header */}
          <Header />

          {/* Main */}
          <main className="flex-1 p-6 lg:p-8">
            {children}
          </main>

        </div>

      </div>

    </div>
  );
}