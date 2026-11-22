import { 
  Shield, 
  Zap, 
  TrendingUp, 
  Lock, 
  Users, 
  BarChart3,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      title: "True Autonomy",
      description: "Agents operate independently without human approval for every transaction.",
      icon: Zap,
      stat: "100%",
      statLabel: "Automated execution",
      color: "from-amber-500 to-amber-600"
    },
    {
      title: "Financial Accountability",
      description: "Every transaction is attributed to a specific agent with immutable audit trail.",
      icon: Shield,
      stat: "0",
      statLabel: "Unattributed transactions",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Deterministic Controls",
      description: "Spending limits enforced at the protocol level, not dependent on AI model behavior.",
      icon: Lock,
      stat: "∞",
      statLabel: "Policy combinations",
      color: "from-mint-500 to-emerald-600"
    },
    {
      title: "Enterprise Compliance",
      description: "Built-in regulatory reporting, KYC/AML integrations, and audit-ready architecture.",
      icon: BarChart3,
      stat: "24/7",
      statLabel: "Compliance monitoring",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Multi-Agent Scaling",
      description: "Manage thousands of agents with isolated accounts and granular permission systems.",
      icon: Users,
      stat: "10x",
      statLabel: "Operational efficiency",
      color: "from-slate-600 to-slate-700"
    },
    {
      title: "Real-Time Analytics",
      description: "Comprehensive dashboards with real-time insights into agent financial activity.",
      icon: TrendingUp,
      stat: "50ms",
      statLabel: "Data latency",
      color: "from-navy-600 to-navy-700"
    }
  ]

  const caseStudies = [
    {
      company: "AI Research Lab",
      metric: "Reduced operational overhead by 85%",
      description: "Automated payment workflows for 50+ research agents"
    },
    {
      company: "Trading Platform",
      metric: "$2.4M processed monthly",
      description: "Scaled from 5 to 200 autonomous trading agents"
    },
    {
      company: "SaaS Startup",
      metric: "100% compliance audit pass rate",
      description: "Implemented automated financial controls across departments"
    }
  ]

  return (
    <section className="relative py-32 sm:py-48 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern [background-size:64px_64px]" />
        <div className="absolute inset-0 bg-gradient-radial from-mint-100/10 via-transparent to-transparent" />
      </div>

      {/* Floating shapes */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-100/30 to-amber-200/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-indigo-100/30 to-purple-200/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200/60 shadow-sm">
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-mint-500 animate-pulse" />
              <div className="h-1.5 w-1.5 rounded-full bg-mint-500 animate-pulse" style={{ animationDelay: '150ms' }} />
              <div className="h-1.5 w-1.5 rounded-full bg-mint-500 animate-pulse" style={{ animationDelay: '300ms' }} />
            </div>
            <span className="text-sm font-semibold text-slate-700">
              Business Impact
            </span>
          </div>
          
          <h2 className="text-title sm:text-display font-bold tracking-tight text-navy-950 mb-6">
            Beyond technology—
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-navy-700 to-navy-900">
              measurable results
            </span>
          </h2>
          
          <p className="text-lead text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Organizations using Bytebank see significant improvements in operational efficiency, compliance, and financial control.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              value: "3.2s",
              label: "Average transaction time",
              change: "+94%",
              trend: "up"
            },
            {
              value: "99.99%",
              label: "Uptime SLA",
              change: "0 downtime",
              trend: "neutral"
            },
            {
              value: "10,000+",
              label: "Transactions per second",
              change: "+40%",
              trend: "up"
            }
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="relative rounded-2xl bg-white/80 backdrop-blur-sm border border-white/70 p-8 shadow-card hover:shadow-card-lg transition-all duration-500 group">
                {/* Gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="flex items-end justify-between mb-4">
                    <div className="text-4xl font-bold text-navy-950">{stat.value}</div>
                    {stat.trend === "up" && (
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium">
                        <ArrowUpRight className="w-3 h-3" />
                        <span>{stat.change}</span>
                      </div>
                    )}
                    {stat.trend === "neutral" && (
                      <div className="px-2 py-1 rounded-full bg-slate-50 text-slate-600 text-sm font-medium">
                        {stat.change}
                      </div>
                    )}
                  </div>
                  <p className="text-slate-600 font-medium">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div
                key={idx}
                className="animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative group h-full">
                  {/* Card Background */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/80 via-white/60 to-white/40 backdrop-blur-xl border border-white/70 shadow-card transition-all duration-500 group-hover:shadow-card-lg group-hover:border-white/90" />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-mint-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Card Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon and Stat */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-white to-white/80 rounded-xl blur-sm" />
                          <div className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${benefit.color} shadow-lg`}>
                            <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-navy-950">{benefit.stat}</div>
                          <div className="text-xs text-slate-500 font-medium">{benefit.statLabel}</div>
                        </div>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-navy-900 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Hover effect line */}
                    <div className="mt-6">
                      <div className="w-0 h-0.5 bg-gradient-to-r from-mint-500 to-emerald-600 group-hover:w-full transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Case Studies */}
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-navy-950 mb-2">Trusted by forward-thinking teams</h3>
              <p className="text-slate-600">See how organizations are transforming operations with Bytebank</p>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-navy-900 text-sm font-medium transition-colors bg-white/50 backdrop-blur-sm">
              <ArrowUpRight className="w-4 h-4" />
              <span>View all case studies</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <div 
                key={idx} 
                className="relative group"
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/80 via-white/60 to-white/40 backdrop-blur-xl border border-white/70 shadow-card transition-all duration-500 group-hover:shadow-card-lg group-hover:border-white/90" />
                
                <div className="relative p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-100 to-slate-200">
                      <span className="text-sm font-bold text-slate-700">
                        {study.company.split(' ').map(w => w[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-950">{study.company}</h4>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <div className="h-1.5 w-1.5 rounded-full bg-mint-500" />
                        <span>Case study</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-xl font-bold text-navy-950 mb-2">{study.metric}</div>
                    <p className="text-slate-600 text-sm">{study.description}</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-mint-700 group-hover:text-mint-800 transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Read full story</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-navy-50 to-white border border-slate-200/80 shadow-card mb-8">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-mint-500 animate-pulse" />
              <span className="text-sm font-medium text-slate-700">Ready to see your metrics improve?</span>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-white text-sm font-semibold transition-colors">
              <span>Schedule demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
