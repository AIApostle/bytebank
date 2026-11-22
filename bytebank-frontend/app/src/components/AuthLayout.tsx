import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Zap, ArrowLeft, Shield, Lock } from 'lucide-react'

interface AuthLayoutProps {
  children: ReactNode
  title: string
  subtitle: string
  footerText: string
  footerLinkText: string
  footerLinkTo: string
}

export default function AuthLayout({
  children,
  title,
  subtitle,
  footerText,
  footerLinkText,
  footerLinkTo
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-mint-100/30 to-emerald-100/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-navy-100/20 to-indigo-100/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-grid-pattern [background-size:64px_64px] opacity-5" />
      </div>

      {/* Back to home link */}
      <div className="absolute top-8 left-8 z-10">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200/60 text-slate-700 hover:text-navy-900 text-sm font-medium transition-colors hover:border-slate-300"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to home</span>
        </Link>
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative flex h-12 w-12 items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-mint-400 to-mint-600 rounded-lg rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-mint-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight text-navy-950 block">Bytebank</span>
                <span className="text-xs text-slate-500 font-medium">Agent Finance Platform</span>
              </div>
            </Link>
          </div>

          {/* Auth card */}
          <div className="relative">
            {/* Card background with glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/90 via-white/80 to-white/90 backdrop-blur-xl border border-white/70 shadow-card-xl" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-mint-500/5 to-emerald-500/5" />
            
            <div className="relative p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-navy-950 mb-3">{title}</h1>
                <p className="text-slate-600">{subtitle}</p>
              </div>

              {/* Content */}
              {children}

              {/* Security indicators */}
              <div className="mt-8 pt-8 border-t border-slate-100">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Shield className="w-4 h-4 text-emerald-500" />
                    <span>Bank‑grade security</span>
                  </div>
                  <div className="h-4 w-px bg-slate-200" />
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Lock className="w-4 h-4 text-emerald-500" />
                    <span>Encrypted data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-slate-600 text-sm">
              {footerText}{' '}
              <Link
                to={footerLinkTo}
                className="font-semibold text-mint-600 hover:text-mint-700 transition-colors"
              >
                {footerLinkText}
              </Link>
            </p>
          </div>

          {/* Terms notice */}
          <div className="mt-6 text-center">
            <p className="text-xs text-slate-500">
              By continuing, you agree to our{' '}
              <a href="#" className="text-slate-600 hover:text-slate-700 underline">Terms</a>{' '}
              and{' '}
              <a href="#" className="text-slate-600 hover:text-slate-700 underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}