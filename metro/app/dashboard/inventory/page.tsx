"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InventoryPage() {
  const items = [
    { id: 1, name: "Medical Masks", quantity: 5000, unit: "pcs", status: "In Stock" },
    { id: 2, name: "Sanitizer 500ml", quantity: 1200, unit: "bottles", status: "In Stock" },
    { id: 3, name: "Syringes 5ml", quantity: 450, unit: "pcs", status: "Low Stock" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#000080]">Inventory</h1>
        <p className="text-gray-600 mt-2">Track and manage medical supplies</p>
      </div>

      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle className="text-[#000080]">Medical Supplies</CardTitle>
          <CardDescription>Total items: {items.length}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Item Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Quantity</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Unit</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.quantity}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.unit}</td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${item.status === "In Stock" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"}`}
                      >
                        {item.status}
                      </span>
                    </td>
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
