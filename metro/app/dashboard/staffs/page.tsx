"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function StaffsPage() {
  const staffs = [
    { id: 1, name: "Dr. Amara Okafor", role: "Medical Director", status: "Active", hireDate: "2022-05-10" },
    { id: 2, name: "Chukwu Nwosu", role: "Finance Manager", status: "Active", hireDate: "2023-01-15" },
    { id: 3, name: "Funke Adeyemi", role: "Nurse", status: "On Leave", hireDate: "2021-11-20" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#000080]">Staff Management</h1>
        <p className="text-gray-600 mt-2">Manage employees and staff information</p>
      </div>

      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle className="text-[#000080]">Staff Directory</CardTitle>
          <CardDescription>Total: {staffs.length} employees</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Role</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Hire Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {staffs.map((staff) => (
                  <tr key={staff.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm text-gray-900">{staff.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{staff.role}</td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${staff.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                      >
                        {staff.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{staff.hireDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
