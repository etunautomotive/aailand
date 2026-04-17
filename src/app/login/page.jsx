'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'

// Google Icon Component
const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s12-5.373 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-2.641-.21-5.236-.611-7.743z" />
    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.022 35.026 44 30.038 44 24c0-2.641-.21-5.236-.611-7.743z" />
  </svg>
)

// Glass Input Wrapper
const GlassInputWrapper = ({ children }) => (
  <div className="rounded-2xl border border-secondary/10 bg-white/50 backdrop-blur-sm transition-colors focus-within:border-primary/70 focus-within:bg-primary/5">
    {children}
  </div>
)

// Testimonial Card
const TestimonialCard = ({ testimonial, delay }) => (
  <div className={`flex items-start gap-3 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/20 p-5 w-64 shadow-lg`}>
    <img src={testimonial.avatarSrc} className="h-10 w-10 object-cover rounded-2xl" alt={testimonial.name} />
    <div className="text-sm leading-snug">
      <p className="flex items-center gap-1 font-bold text-secondary">{testimonial.name}</p>
      <p className="text-secondary/60 text-xs">{testimonial.handle}</p>
      <p className="mt-2 text-secondary/80">{testimonial.text}</p>
    </div>
  </div>
)

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate sign-in delay
    setTimeout(() => {
      console.log('Sign in with:', { email, password })
      // In a real app, this would call your auth API
      // window.location.href = '/dashboard'
      setIsLoading(false)
    }, 1500)
  }

  const handleGoogleSignIn = () => {
    console.log('Sign in with Google')
    // In a real app, this would trigger Google OAuth
  }

  const handleResetPassword = () => {
    console.log('Reset password')
    // In a real app, this would navigate to reset password page
  }

  const handleCreateAccount = () => {
    console.log('Create account')
    // In a real app, this would navigate to signup page
  }

  const testimonials = [
    {
      avatarSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      name: 'Sarah Martinez',
      handle: 'GM, AutoGroup Texas',
      text: '"See results on day one. We closed 8 deals from old data in the first week."'
    },
    {
      avatarSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      name: 'James Wilson',
      handle: 'Sales Manager, Elite Motors',
      text: '"One rep can manage the volume of 10. Our BDC team never looked back."'
    },
    {
      avatarSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      name: 'Miguel Rodriguez',
      handle: 'Owner, Rapid Auto Sales',
      text: '"The AI handles objections like someone who actually worked the floor."'
    }
  ]

  return (
    <div className="h-[100dvh] flex flex-col md:flex-row font-inter w-[100dvw] bg-white relative">
      {/* Logo - Top Left */}
      <Link href="/" className="absolute top-8 left-8 z-50 hover:opacity-80 transition-opacity">
        <div className="text-2xl font-bold font-space-grotesk text-secondary">
          Automotive<span className="text-primary">AI</span>
        </div>
      </Link>

      {/* Left column: sign-in form */}
      <section className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold font-space-grotesk text-secondary tracking-tight">
                Welcome Back
              </h1>
              <p className="text-lg text-secondary/70">
                Sign in to your dealership and get back to closing deals.
              </p>
            </div>

            {/* Sign In Form */}
            <form className="space-y-6" onSubmit={handleSignIn}>
              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-secondary mb-2">Email Address</label>
                <GlassInputWrapper>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@dealership.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent text-sm p-4 rounded-2xl focus:outline-none text-secondary placeholder-secondary/40"
                    required
                  />
                </GlassInputWrapper>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-bold text-secondary mb-2">Password</label>
                <GlassInputWrapper>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-transparent text-sm p-4 pr-12 rounded-2xl focus:outline-none text-secondary placeholder-secondary/40"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5 text-secondary/60 hover:text-secondary transition-colors" />
                      ) : (
                        <Eye className="w-5 h-5 text-secondary/60 hover:text-secondary transition-colors" />
                      )}
                    </button>
                  </div>
                </GlassInputWrapper>
              </div>

              {/* Remember Me & Reset Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    className="w-4 h-4 rounded border-secondary/30 accent-primary"
                  />
                  <span className="text-secondary/80">Keep me signed in</span>
                </label>
                <button
                  type="button"
                  onClick={handleResetPassword}
                  className="text-primary hover:underline font-bold transition-colors"
                >
                  Reset password
                </button>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-full bg-primary py-4 font-bold text-white hover:shadow-xl hover:shadow-primary/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center justify-center">
              <span className="w-full border-t border-secondary/10"></span>
              <span className="px-4 text-sm text-secondary/60 bg-white absolute font-medium">Or continue with</span>
            </div>

            {/* Google Sign In */}
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 border border-secondary/10 rounded-full py-4 hover:bg-secondary/5 transition-colors font-bold text-secondary"
            >
              <GoogleIcon />
              Continue with Google
            </button>

            {/* Create Account Link */}
            <p className="text-center text-sm text-secondary/70">
              New to Automotive AI?{' '}
              <button
                type="button"
                onClick={handleCreateAccount}
                className="text-primary hover:underline font-bold transition-colors"
              >
                Create an account
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Right column: hero image + testimonials */}
      <section className="hidden md:flex flex-1 relative p-4 bg-gradient-to-br from-primary/10 via-secondary/5 to-tertiary/10 items-end justify-center">
        {/* Background gradient placeholder */}
        <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-white/20 backdrop-blur-sm"></div>

        {/* Hero text overlay */}
        <div className="absolute top-12 left-8 right-8 z-20">
          <h2 className="text-4xl font-bold font-space-grotesk text-secondary mb-2">
            Join 100+ Dealerships
          </h2>
          <p className="text-lg text-secondary/70 max-w-md">
            Closing more deals with AI that actually works the floor.
          </p>
        </div>

        {/* Testimonials */}
        {testimonials.length > 0 && (
          <div className="relative z-10 flex flex-col gap-4 w-full px-8 pb-8">
            <TestimonialCard testimonial={testimonials[0]} delay="" />
            {testimonials[1] && (
              <div className="hidden xl:flex ml-auto">
                <TestimonialCard testimonial={testimonials[1]} delay="" />
              </div>
            )}
            {testimonials[2] && (
              <div className="hidden 2xl:flex ml-auto">
                <TestimonialCard testimonial={testimonials[2]} delay="" />
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  )
}
