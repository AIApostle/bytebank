import { 
  UserPlus, 
  Settings, 
  Wallet, 
  Send, 
  Terminal, 
  CheckCircle2,
  ArrowRight,
  ChevronRight
} from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Register Agent",
      description: "Create a new AI agent with unique cryptographic identity. Get API keys, webhook URLs, and dashboard access.",
      icon: UserPlus,
      color: "from-indigo-500 to-indigo-600",
      details: [
        "Unique agent ID generation",
        "API key provisioning",
        "Dashboard onboarding"
      ]
    },
    {
      number: "02",
      title: "Configure Financial Controls",
      description: "Define spending policies, transaction limits, and authorization rules programmatically.",
      icon: Settings,
      color: "from-amber-500 to-amber-600",
      details: [
        "Transaction ceilings",
        "Recipient whitelists",
        "Time-based constraints"
      ]
    },
    {
      number: "03",
      title: "Fund Agent Account",
      description: "Deposit funds into the agent's Stellar account via testnet sandbox or production network.",
      icon: Wallet,
      color: "from-mint-500 to-emerald-600",
      details: [
        "Testnet sandbox",
        "Production funding",
        "Multi-asset support"
      ]
    },
    {
      number: "04",
      title: "Monitor & Scale",
      description: "Agent autonomously executes payments while you monitor performance and scale operations.",
      icon: Send,
      color: "from-purple-500 to-purple-600",
      details: [
        "Real-time monitoring",
        "Analytics dashboard",
        "Automated scaling"
      ]
    }
  ]

  return (
    <section id="how-it-works" className="relative py-32 sm:py-48 bg-navy-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
        <div className="absolute inset-0 bg-grid-pattern [background-size:64px_64px] opacity-5" />
        <div className="absolute inset-0 bg-gradient-radial from-mint-500/5 via-transparent to-transparent" />
      </div>

      {/* Glowing elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-mint-500/10 to-emerald-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-slow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
            <Terminal className="w-4 h-4 text-mint-400" />
            <span className="text-sm font-medium text-slate-300">
              Developer Experience
            </span>
          </div>
          
          <h2 className="text-title sm:text-display font-bold tracking-tight text-white mb-6">
            Simple integration,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-mint-400 to-emerald-500">
              complete control
            </span>
          </h2>
          
          <p className="text-lead text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From onboarding to production in minutes. Our platform handles the complexity so you can focus on building.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-mint-500/30 to-emerald-500/30 blur-sm" />

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div
                  key={idx}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  {/* Step Number Badge */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-full blur" />
                    <div className="relative flex items-center justify-center w-16 h-16 mx-auto">
                      {/* Outer glow */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-mint-500/20 to-emerald-500/20 blur-md" />
                      
                      {/* Main circle */}
                      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-navy-800 to-navy-900 border border-slate-700">
                        {/* Animated ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-mint-500/50 animate-spin-slow" />
                        
                        {/* Inner circle with gradient */}
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${step.color} shadow-glow-sm`}>
                          <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold tracking-widest text-mint-400 uppercase">
                        Step {step.number}
                      </span>
                      <div className="h-px w-6 bg-gradient-to-r from-mint-500 to-transparent" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">
                      {step.title}
                    </h3>

                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Feature details */}
                    <ul className="space-y-2 mb-8">
                      {step.details.map((detail, detailIdx) => (
                        <li key={detailIdx} className="flex items-center gap-2 text-sm text-slate-500">
                          <CheckCircle2 className="w-4 h-4 text-mint-500 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Interactive arrow for desktop */}
                    <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-500 group-hover:text-mint-400 transition-colors">
                      <span>Next step</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Interactive Code Demo */}
        <div className="mt-24 animate-fade-in-up">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Integration example</h3>
              <p className="text-slate-400">Get started with just a few lines of code</p>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-sm font-medium transition-colors">
              <Terminal className="w-4 h-4" />
              <span>Try in playground</span>
            </button>
          </div>

          <div className="relative rounded-2xl overflow-hidden">
            {/* Code background */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900" />
            <div className="absolute inset-0 bg-grid-pattern [background-size:40px_40px] opacity-10" />

            {/* Code content */}
            <div className="relative">
              {/* File tabs */}
              <div className="flex border-b border-slate-700/50 bg-navy-900/50 backdrop-blur-sm">
                {['agent.js', 'controls.js', 'payment.js'].map((tab, idx) => (
                  <div
                    key={idx}
                    className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                      idx === 0 
                        ? 'border-mint-500 text-white' 
                        : 'border-transparent text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {tab}
                  </div>
                ))}
              </div>

              {/* Code block */}
              <div className="p-8 overflow-x-auto">
                <pre className="text-sm font-mono leading-relaxed">
                  <code className="text-slate-300">
{`// 1. Initialize SDK
import { Bytebank } from '@bytebank/sdk'

const bytebank = new Bytebank({
  apiKey: process.env.BYTEBANK_API_KEY,
  environment: 'sandbox'
})

// 2. Create agent with controls
const agent = await bytebank.agents.create({
  name: "DataAnalyzer",
  identity: {
    type: "ai_agent",
    model: "claude-3.5-sonnet"
  },
  controls: {
    maxPerTransaction: "100 XLM",
    dailyLimit: "500 XLM",
    allowedAssets: ["XLM", "USDC"],
    whitelistedRecipients: [
      "GAXXXXX...", // Vendor 1
      "GBXXXXX..."  // Vendor 2
    ]
  }
})

// 3. Fund agent account
await agent.fund({
  amount: "1000 XLM",
  source: "testnet_faucet"
})

// 4. Agent makes payment
const payment = await agent.pay({
  recipient: "GBXXXXXX...",
  amount: "50 XLM",
  memo: "Monthly API subscription",
  metadata: {
    invoice_id: "inv_12345",
    category: "software"
  }
})

console.log(\`Payment settled: \${payment.id}\`)
console.log(\`Transaction hash: \${payment.txHash}\`)`}
                  </code>
                </pre>
              </div>

              {/* Code actions */}
              <div className="border-t border-slate-700/50 bg-navy-900/50 backdrop-blur-sm p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-mint-600 to-emerald-600 text-white text-sm font-semibold hover:shadow-glow-sm transition-all">
                    <Terminal className="w-4 h-4" />
                    <span>Run code</span>
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 hover:border-slate-600 text-slate-400 hover:text-slate-300 text-sm font-medium transition-colors">
                    <ArrowRight className="w-4 h-4" />
                    <span>View full example</span>
                  </button>
                </div>
                <div className="text-xs text-slate-500">
                  <span className="font-mono">agent.js</span>
                  <span className="mx-2">•</span>
                  <span>48 lines</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
