"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Users,
  Handshake,
  Package,
  BarChart3,
  DollarSign,
  UserCheck,
  Menu,
  X,
  Home,
  Bell,
  Settings,
  LogOut,
} from "lucide-react"
import { tokenStorage } from "@/lib/token-storage"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    tokenStorage.removeToken()
    router.push("/login")
  }

  const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: Home },
    { label: "Patients", href: "/dashboard/patients", icon: Users },
    { label: "Partners", href: "/dashboard/partners", icon: Handshake },
    { label: "Inventory", href: "/dashboard/inventory", icon: Package },
    { label: "Analysis", href: "/dashboard/analysis", icon: BarChart3 },
    { label: "Finance", href: "/dashboard/finance", icon: DollarSign },
    { label: "Staffs", href: "/dashboard/staffs", icon: UserCheck },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-[#000080] to-[#001a4d] text-white transition-transform duration-300 md:static md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-blue-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#3396FF] rounded-lg flex items-center justify-center">
              <span className="font-bold text-[#000080]">MC</span>
            </div>
            <h1 className="text-xl font-bold">MetroCare</h1>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden p-1 hover:bg-blue-900 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-6 space-y-4">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link key={item.href} href={item.href}>
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-100 hover:bg-blue-900 transition-colors cursor-pointer">
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </div>
              </Link>
            )
          })}
        </nav>

        {/* Profile Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-blue-900 space-y-3">
          <Link href="/change-password">
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-900 transition-colors cursor-pointer">
              <Settings className="w-4 h-4" />
              <span className="text-sm">Settings</span>
            </div>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-900 transition-colors text-left"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="flex items-center justify-between p-4 md:p-6">
            <button onClick={() => setSidebarOpen(true)} className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">MetroCare Admin</h2>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell className="w-6 h-6 text-[#3396FF]" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-[#3396FF] to-[#000080] rounded-full"></div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-4 md:p-6 lg:p-8">{children}</div>
      </main>
    </div>
  )
}
