

"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AuthLayout } from "@/components/auth-layout"
import { InputField } from "@/components/input-field"
import { authService } from "@/lib/auth-service"
import Link from "next/link"

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const errors: Record<string, string> = {}
    if (!formData.firstName) errors.firstName = "First name is required"
    if (!formData.lastName) errors.lastName = "Last name is required"
    if (!formData.email) errors.email = "Email is required"
    if (!formData.password || formData.password.length < 6) errors.password = "Password must be at least 6 characters"
    if (!formData.phoneNumber) errors.phoneNumber = "Phone number is required"
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const updated = { ...prev }
        delete updated[field]
        return updated
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setFieldErrors({})

    if (!validateForm()) return

    setLoading(true)
    try {
      const response = await authService.register(formData)

      // Redirect to email verification page
      router.push(`/verify-email?email=${encodeURIComponent(formData.email)}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout title="Create Account">
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{error}</div>}

        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="First Name"
            placeholder="John"
            value={formData.firstName}
            onChange={(value) => handleChange("firstName", value)}
            error={fieldErrors.firstName}
            required
          />
          <InputField
            label="Last Name"
            placeholder="Doe"
            value={formData.lastName}
            onChange={(value) => handleChange("lastName", value)}
            error={fieldErrors.lastName}
            required
          />
        </div>

        <InputField
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={(value) => handleChange("email", value)}
          error={fieldErrors.email}
          required
        />

        <InputField
          label="Phone Number"
          type="tel"
          placeholder="+1 (555) 000-0000"
          value={formData.phoneNumber}
          onChange={(value) => handleChange("phoneNumber", value)}
          error={fieldErrors.phoneNumber}
          required
        />

        <InputField
          label="Password"
          type="password"
          placeholder="Create a strong password"
          value={formData.password}
          onChange={(value) => handleChange("password", value)}
          error={fieldErrors.password}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#001a4d] hover:bg-[#000d33] text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>

        <p className="text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-[#4fc3f7] hover:text-[#0284a3] font-semibold transition">
            Login here
          </Link>
        </p>

        <p className="text-center text-gray-600 text-sm">
          Want to register as admin?{" "}
          <Link href="/register-admin" className="text-[#4fc3f7] hover:text-[#0284a3] font-semibold transition">
            Register as Admin
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}
