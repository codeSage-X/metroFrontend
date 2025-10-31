"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { AuthLayout } from "@/components/auth-layout"
import { InputField } from "@/components/input-field"
import { authService } from "@/lib/auth-service"
import Link from "next/link"

export default function VerifyEmailPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get("email") || ""

  const [otp, setOtp] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [resendLoading, setResendLoading] = useState(false)
  const [resendSuccess, setResendSuccess] = useState(false)

  const validateForm = () => {
    const errors: Record<string, string> = {}
    if (!otp) errors.otp = "OTP is required"
    if (otp && otp.length !== 6) errors.otp = "OTP must be 6 digits"
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
      const response = await authService.verifyEmail({ email, otp })

      // Store token if returned
      if (response.token) {
        localStorage.setItem("authToken", response.token)
      }

      router.push("/login")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Email verification failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleResendOtp = async () => {
    setResendLoading(true)
    setResendSuccess(false)
    try {
      // Call forgot password endpoint to resend OTP
      await authService.forgotPassword({ email })
      setResendSuccess(true)
      setTimeout(() => setResendSuccess(false), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to resend OTP")
    } finally {
      setResendLoading(false)
    }
  }

  return (
    <AuthLayout title="Verify Email">
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{error}</div>}

        {resendSuccess && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
            OTP has been sent to your email. Please check your inbox.
          </div>
        )}

        <div className="text-center mb-6">
          <p className="text-gray-600 text-sm">
            We have sent a verification code to <span className="font-semibold text-gray-900">{email}</span>
          </p>
        </div>

        <InputField
          label="Verification Code"
          type="text"
          placeholder="000000"
          value={otp}
          onChange={setOtp}
          error={fieldErrors.otp}
          required
        />

        <p className="text-center text-gray-600 text-sm">
          Didnt receive the code?{" "}
          <button
            type="button"
            onClick={handleResendOtp}
            disabled={resendLoading}
            className="text-[#4fc3f7] hover:text-[#0284a3] font-semibold transition disabled:opacity-50"
          >
            {resendLoading ? "Sending..." : "Resend OTP"}
          </button>
        </p>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#001a4d] hover:bg-[#000d33] text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Verifying..." : "Verify Email"}
        </button>

        <p className="text-center text-gray-600 text-sm">
          Back to{" "}
          <Link href="/login" className="text-[#4fc3f7] hover:text-[#0284a3] font-semibold transition">
            login
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}
