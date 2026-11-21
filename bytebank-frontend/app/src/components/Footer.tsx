export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 border border-blue-500/30">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-lg font-bold text-white">ByteBank</span>
            </div>
            <p className="text-sm text-slate-400">Financial infrastructure for autonomous AI agents.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">© 2026 ByteBank. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-slate-500 hover:text-slate-400 transition-colors">Twitter</a>
            <a href="#" className="text-sm text-slate-500 hover:text-slate-400 transition-colors">GitHub</a>
            <a href="#" className="text-sm text-slate-500 hover:text-slate-400 transition-colors">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
