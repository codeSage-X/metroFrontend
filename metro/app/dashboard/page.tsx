"use client"

import type React from "react"

import Link from "next/link"
import { Users, Handshake, Package, BarChart3, DollarSign, UserCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface MetricCard {
  title: string
  value: string
  description: string
  icon: React.ReactNode
  color: string
  href: string
}

const metrics: MetricCard[] = [
  {
    title: "Patients",
    value: "2,450",
    description: "Active patients",
    icon: <Users className="w-6 h-6" />,
    color: "bg-blue-500",
    href: "/dashboard/patients",
  },
  {
    title: "Partners",
    value: "142",
    description: "Partner organizations",
    icon: <Handshake className="w-6 h-6" />,
    color: "bg-sky-400",
    href: "/dashboard/partners",
  },
  {
    title: "Inventory",
    value: "8,240",
    description: "Items in stock",
    icon: <Package className="w-6 h-6" />,
    color: "bg-blue-600",
    href: "/dashboard/inventory",
  },
  {
    title: "Analysis",
    value: "94%",
    description: "System efficiency",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "bg-sky-500",
    href: "/dashboard/analysis",
  },
  {
    title: "Finance",
    value: "₦2.5M",
    description: "Monthly revenue",
    icon: <DollarSign className="w-6 h-6" />,
    color: "bg-blue-700",
    href: "/dashboard/finance",
  },
  {
    title: "Staffs",
    value: "156",
    description: "Total employees",
    icon: <UserCheck className="w-6 h-6" />,
    color: "bg-sky-600",
    href: "/dashboard/staffs",
  },
]

export default function DashboardPage() {
  return (
    <>
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {metrics.map((metric, index) => (
          <Link key={index} href={metric.href}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-0">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-gray-700">{metric.title}</CardTitle>
                    <CardDescription className="text-xs text-gray-500">{metric.description}</CardDescription>
                  </div>
                  <div className={`${metric.color} p-3 rounded-lg text-white`}>{metric.icon}</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl md:text-4xl font-bold text-[#000080]">{metric.value}</div>
                <div className="mt-4 h-1 bg-gradient-to-r from-[#000080] to-[#3396FF] rounded-full"></div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-[#000080]">Patient Growth</CardTitle>
            <CardDescription>Last 6 months</CardDescription>
          </CardHeader>
          <CardContent className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-sky-50">
            <p className="text-gray-400">Chart visualization here</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-[#000080]">Revenue Trends</CardTitle>
            <CardDescription>Monthly overview</CardDescription>
          </CardHeader>
          <CardContent className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-sky-50">
            <p className="text-gray-400">Chart visualization here</p>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
