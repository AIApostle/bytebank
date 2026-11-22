import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Mail, 
  Lock, 
  User, 
  Building, 
  Eye, 
  EyeOff,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import AuthLayout from '../components/AuthLayout'

export default function SignUp() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    acceptTerms: false,
    marketingEmails: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number'
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and conditions'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // For demo purposes, navigate to dashboard
      navigate('/')
    }, 1500)
  }

  const passwordRequirements = [
    { text: 'At least 8 characters', met: formData.password.length >= 8 },
    { text: 'Uppercase letter', met: /[A-Z]/.test(formData.password) },
    { text: 'Lowercase letter', met: /[a-z]/.test(formData.password) },
    { text: 'Number', met: /\d/.test(formData.password) },
  ]

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start building autonomous financial systems in minutes"
      footerText="Already have an account?"
      footerLinkText="Sign in"
      footerLinkTo="/signin"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
            Full name
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <User className="w-5 h-5 text-slate-400" />
            </div>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                errors.name ? 'border-red-300' : 'border-slate-300'
              } bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-transparent transition-colors`}
              placeholder="John Doe"
            />
          </div>
          {errors.name && (
            <p className="mt-2 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            Email address
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <Mail className="w-5 h-5 text-slate-400" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                errors.email ? 'border-red-300' : 'border-slate-300'
              } bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-transparent transition-colors`}
              placeholder="you@company.com"
            />
          </div>
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Company field (optional) */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
            Company <span className="text-slate-500 font-normal">(optional)</span>
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <Building className="w-5 h-5 text-slate-400" />
            </div>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-transparent transition-colors"
              placeholder="Your company name"
            />
          </div>
        </div>

        {/* Password field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
            Password
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <Lock className="w-5 h-5 text-slate-400" />
            </div>
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              className={`w-full pl-10 pr-12 py-3 rounded-lg border ${
                errors.password ? 'border-red-300' : 'border-slate-300'
              } bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-transparent transition-colors`}
              placeholder="Create a secure password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-2 text-sm text-red-600">{errors.password}</p>
          )}

          {/* Password requirements */}
          <div className="mt-3 space-y-2">
            {passwordRequirements.map((req, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 ${
                  req.met ? 'text-emerald-500' : 'text-slate-300'
                }`} />
                <span className={`text-sm ${
                  req.met ? 'text-slate-600' : 'text-slate-400'
                }`}>
                  {req.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Confirm password field */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-2">
            Confirm password
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <Lock className="w-5 h-5 text-slate-400" />
            </div>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full pl-10 pr-12 py-3 rounded-lg border ${
                errors.confirmPassword ? 'border-red-300' : 'border-slate-300'
              } bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-transparent transition-colors`}
              placeholder="Confirm your password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Checkboxes */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-mint-600 focus:ring-mint-500"
            />
            <label htmlFor="acceptTerms" className="text-sm text-slate-700">
              I agree to the{' '}
              <a href="#" className="text-mint-600 hover:text-mint-700 font-medium">Terms of Service</a>{' '}
              and{' '}
              <a href="#" className="text-mint-600 hover:text-mint-700 font-medium">Privacy Policy</a>
            </label>
          </div>
          {errors.acceptTerms && (
            <p className="text-sm text-red-600">{errors.acceptTerms}</p>
          )}

          <div className="flex items-start gap-3">
            <input
              id="marketingEmails"
              name="marketingEmails"
              type="checkbox"
              checked={formData.marketingEmails}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-mint-600 focus:ring-mint-500"
            />
            <label htmlFor="marketingEmails" className="text-sm text-slate-700">
              I want to receive product updates, tips, and offers from Bytebank
            </label>
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full group relative inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-mint-500 to-emerald-600 text-white font-semibold text-lg transition-all hover:shadow-xl hover:shadow-mint-500/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Creating account...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              <span>Create account</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-slate-500">Or continue with</span>
          </div>
        </div>

        {/* Social login buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-navy-900 font-medium transition-colors bg-white"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Google</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-navy-900 font-medium transition-colors bg-white"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </button>
        </div>

        {/* Benefits */}
        <div className="mt-8 rounded-lg bg-gradient-to-r from-mint-50 to-emerald-50 border border-mint-100 p-4">
          <h3 className="text-sm font-semibold text-navy-900 mb-2">What you get:</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Free testnet access with unlimited agents</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>$100 in free transaction credits</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Priority support during development</span>
            </li>
          </ul>
        </div>
      </form>
    </AuthLayout>
  )
}