export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Register Agent",
      description: "Create a new agent in Bytebank. Receive unique credentials and an identity."
    },
    {
      number: "2",
      title: "Configure Controls",
      description: "Set spending limits, transaction ceilings, and policy rules for your agent."
    },
    {
      number: "3",
      title: "Fund Account",
      description: "Deposit money into the agent's Stellar account via testnet or production."
    },
    {
      number: "4",
      title: "Start Transacting",
      description: "Agent initiates payments. Bytebank validates and settles on Stellar."
    }
  ]

  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-white border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-main mb-4">
            How it works
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Simple integration. Complete control. Financial clarity.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mint to-emerald flex items-center justify-center text-white font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-main mb-2">{step.title}</h3>
                <p className="text-sm text-slate">{step.description}</p>
              </div>
              {idx < 3 && (
                <div className="hidden md:block absolute top-6 -right-3 w-6 h-0.5 bg-gradient-to-r from-mint to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Code example */}
        <div className="mt-20 bg-navy-midnight rounded-lg border border-slate-200 p-8 overflow-x-auto">
          <p className="text-slate text-sm mb-4 font-medium">Code example</p>
          <pre className="text-slate-300 text-sm font-mono">
{`const agent = await bytebank.agents.create({
  name: "DataAnalyzer",
  controls: {
    maxPerTransaction: "100 XLM",
    dailyLimit: "500 XLM",
    allowedAssets: ["XLM"]
  }
});

const payment = await agent.pay({
  recipient: "GBXXXXXX...",
  amount: "50 XLM"
});`}
          </pre>
        </div>
      </div>
    </section>
  )
}
