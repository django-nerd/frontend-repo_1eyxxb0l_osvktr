import { ArrowUpRight, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-teal-400/20 bg-[#0B0F14] py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <p className="text-sm text-teal-200/80">© 2025 Naveen Rao — Built with Next.js + TailwindCSS.</p>
        <a href="#hero" className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-white/5 px-3 py-1.5 text-xs font-semibold text-teal-100 backdrop-blur-md hover:border-teal-300/60">
          <ArrowUp className="h-3.5 w-3.5" /> Back to Top
        </a>
      </div>
    </footer>
  )
}
