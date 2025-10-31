"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FinancePage() {
  const transactions = [
    { id: 1, description: "Partner Payment", amount: "₦500,000", date: "2024-10-25", status: "Completed" },
    { id: 2, description: "Monthly Subscription", amount: "₦250,000", date: "2024-10-24", status: "Completed" },
    { id: 3, description: "Refund Processed", amount: "-₦50,000", date: "2024-10-23", status: "Completed" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#000080]">Finance</h1>
        <p className="text-gray-600 mt-2">Revenue and financial transactions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-0 shadow-md">
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Total Revenue</p>
            <p className="text-2xl font-bold text-[#000080] mt-2">₦2.5M</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md">
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Monthly Income</p>
            <p className="text-2xl font-bold text-[#000080] mt-2">₦420K</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md">
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Pending</p>
            <p className="text-2xl font-bold text-[#000080] mt-2">₦80K</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle className="text-[#000080]">Recent Transactions</CardTitle>
          <CardDescription>Latest financial activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Description</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm text-gray-900">{transaction.description}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{transaction.amount}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{transaction.date}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                        {transaction.status}
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
