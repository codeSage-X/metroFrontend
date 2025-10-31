import axios from "axios"

const BASE_URL = "http://localhost:3000/api/auth"

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export interface RegisterPayload {
  firstName: string
  lastName: string
  email: string
  password: string
  phoneNumber: string
  adminKey?: string
}

export interface LoginPayload {
  email: string
  password: string
}

export interface VerifyEmailPayload {
  email: string
  otp: string
}

export interface ForgotPasswordPayload {
  email: string
}

export interface ResetPasswordPayload {
  email: string
  otp: string
  newPassword: string
}

export interface ChangePasswordPayload {
  currentPassword: string
  newPassword: string
}

export const authService = {
  async register(data: RegisterPayload) {
    try {
      const response = await apiClient.post("/register", data)
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.msg)
        throw new Error(error.response?.data.msg)
      }
      throw new Error("Registration failed")
    }
  },

  async login(data: LoginPayload) {
    try {
      const response = await apiClient.post("/login", data)
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.msg || "Login failed")
      }
      throw new Error("Login failed")
    }
  },

  async verifyEmail(data: VerifyEmailPayload) {
    try {
      const response = await apiClient.post("/verify-email", data)
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.msg || "Email verification failed")
      }
      throw new Error("Email verification failed")
    }
  },

  async forgotPassword(data: ForgotPasswordPayload) {
    try {
      const response = await apiClient.post("/forgot-password", data)
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || "Forgot password request failed")
      }
      throw new Error("Forgot password request failed")
    }
  },

  async resetPassword(data: ResetPasswordPayload) {
    try {
      const response = await apiClient.post("/reset-password", data)
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || "Password reset failed")
      }
      throw new Error("Password reset failed")
    }
  },

  async changePassword(data: ChangePasswordPayload) {
    try {
      const response = await apiClient.post("/change-password", data)
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || "Password change failed")
      }
      throw new Error("Password change failed")
    }
  },
}
