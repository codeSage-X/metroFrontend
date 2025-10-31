"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PartnersPage() {
  const partners = [
    { id: 1, name: "City Hospital", location: "Lagos", status: "Active", agreement: "2023-06-01" },
    { id: 2, name: "Health Plus Clinic", location: "Abuja", status: "Active", agreement: "2023-08-15" },
    { id: 3, name: "Medical Center Pro", location: "Kano", status: "Pending", agreement: "2024-10-01" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#000080]">Partners</h1>
        <p className="text-gray-600 mt-2">Manage partner organizations and agreements</p>
      </div>

      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle className="text-[#000080]">Partner Organizations</CardTitle>
          <CardDescription>Total: {partners.length} partners</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Organization</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Location</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Agreement Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {partners.map((partner) => (
                  <tr key={partner.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm text-gray-900">{partner.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{partner.location}</td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${partner.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                      >
                        {partner.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{partner.agreement}</td>
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
