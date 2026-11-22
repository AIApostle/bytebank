export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-mint to-emerald">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <span className="text-lg font-bold text-navy-midnight">Bytebank</span>
            </div>
            <p className="text-sm text-slate">Financial infrastructure for autonomous AI agents.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-main mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-slate hover:text-main transition-colors">Features</a></li>
              <li><a href="#" className="text-sm text-slate hover:text-main transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm text-slate hover:text-main transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-main mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-slate hover:text-main transition-colors">About</a></li>
              <li><a href="#" className="text-sm text-slate hover:text-main transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-slate hover:text-main transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-main mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-slate hover:text-main transition-colors">Privacy</a></li>
              <li><a href="#" className="text-sm text-slate hover:text-main transition-colors">Terms</a></li>
              <li><a href="#" className="text-sm text-slate hover:text-main transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate">© 2026 Bytebank. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-slate hover:text-main transition-colors">Twitter</a>
            <a href="#" className="text-sm text-slate hover:text-main transition-colors">GitHub</a>
            <a href="#" className="text-sm text-slate hover:text-main transition-colors">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
