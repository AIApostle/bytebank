export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-slate-900 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-400">
            Simple integration. Powerful capabilities.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              title: "Create Agent",
              description: "Register your agent with ByteBank. Receive unique credentials."
            },
            {
              step: "2",
              title: "Configure Wallet",
              description: "Set spending policies, limits, and asset whitelists for the agent."
            },
            {
              step: "3",
              title: "Fund Account",
              description: "Deposit funds into the agent's Stellar account via testnet or production."
            },
            {
              step: "4",
              title: "Transact",
              description: "Agent initiates payments. ByteBank validates and settles on Stellar."
            }
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white text-center mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 text-center">{item.description}</p>
              </div>
              {idx < 3 && (
                <div className="hidden md:block absolute top-6 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Code example */}
        <div className="mt-20 bg-slate-950 rounded-lg border border-slate-800 p-8 overflow-x-auto">
          <p className="text-slate-400 text-sm mb-4">API Example</p>
          <pre className="text-slate-300 text-sm font-mono">
{`const agent = await bytebank.agents.create({
  name: "MarketAnalyzer",
  policies: {
    maxPerTransaction: "100 XLM",
    dailyLimit: "500 XLM",
    assets: ["XLM"]
  }
});

const payment = await agent.pay({
  recipient: "GBXXXXXX...",
  amount: "50 XLM",
  asset: "XLM"
});`}
          </pre>
        </div>
      </div>
    </section>
  )
}
