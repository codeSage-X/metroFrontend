"use client"

import type React from "react"

interface AuthLayoutProps {
  children: React.ReactNode
  title?: string
}

export function AuthLayout({ children, title }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000080]">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl">
        {/* Left side - Gradient background */}
        <div className="hidden lg:flex flex-col justify-between p-12 metro-gradient hexagon-pattern dot-pattern relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                </linearGradient>
              </defs>
              <path d="M 0 400 Q 100 350 200 380 T 400 400 L 400 600 L 0 600 Z" fill="url(#waveGradient)" />
              <polyline
                points="0,400 50,380 100,390 150,370 200,380 250,360 300,370 350,350 400,360"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                fill="none"
              />
              <polyline
                points="0,420 50,410 100,415 150,405 200,410 250,395 300,405 350,390 400,400"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-2">
                <span>Metro</span>
                <span className="text-cyan-300">Care</span>
              </h1>
              <p className="text-cyan-100 text-lg">Healthcare Administration System</p>
            </div>
          </div>

          <div className="relative z-10 text-white text-sm opacity-80">
            <p>© 2025 MetroCare HMOA. All rights reserved</p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
          <div className="lg:hidden mb-8 text-center">
            <h1 className="text-3xl font-bold">
              <span className="text-[#001a4d]">Metro</span>
              <span className="text-[#4fc3f7]">Care</span>
            </h1>
            <p className="text-gray-600 text-sm mt-1">Healthcare Administration</p>
          </div>

          {title && (
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-[#001a4d]">{title}</h2>
            </div>
          )}

          {children}
        </div>
      </div>
    </div>
  )
}
