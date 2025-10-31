"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AnalysisPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#000080]">Analysis</h1>
        <p className="text-gray-600 mt-2">System performance and analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-[#000080]">System Efficiency</CardTitle>
            <CardDescription>Current performance metric</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-end justify-center h-64 bg-gradient-to-br from-blue-50 to-sky-50 rounded-lg">
              <p className="text-gray-400">Chart placeholder</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-[#000080]">Usage Trends</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-end justify-center h-64 bg-gradient-to-br from-blue-50 to-sky-50 rounded-lg">
              <p className="text-gray-400">Chart placeholder</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
