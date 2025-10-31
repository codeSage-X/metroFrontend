"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AuthLayout } from "@/components/auth-layout"
import { InputField } from "@/components/input-field"
import { authService } from "@/lib/auth-service"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const errors: Record<string, string> = {}
    if (!email) errors.email = "Email is required"
    if (!password) errors.password = "Password is required"
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setFieldErrors({})

    if (!validateForm()) return

    setLoading(true)
    try {
      const response = await authService.login({ email, password })

      // Store token if returned
      if (response.token) {
        localStorage.setItem("authToken", response.token)
      }

      router.push("/dashboard")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout title="Admin Login">
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{error}</div>}

        <InputField
          label="Email Address"
          type="email"
          placeholder="admin@metrocare.com"
          value={email}
          onChange={setEmail}
          error={fieldErrors.email}
          required
        />

        <InputField
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={setPassword}
          error={fieldErrors.password}
          required
        />

        <div className="text-right">
          <Link href="/forgot-password" className="text-sm text-[#4fc3f7] hover:text-[#0284a3] transition">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#001a4d] hover:bg-[#000d33] text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-gray-600 text-sm">
          Need an account?{" "}
          <Link href="/register-admin" className="text-[#4fc3f7] hover:text-[#0284a3] font-semibold transition">
            Register here
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}
