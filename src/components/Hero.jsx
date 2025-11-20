import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[95vh] w-full overflow-hidden bg-[#0B0F14]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14]/60 via-[#0B0F14]/70 to-[#0B0F14] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-white/5 px-4 py-2 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-teal-300" />
            <span className="text-xs font-medium tracking-wide text-teal-200/90">Software Engineer • DevOps • Shopify Developer</span>
          </div>

          <h1 className="mt-6 bg-gradient-to-br from-teal-200 via-cyan-200 to-sky-300 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl">
            Naveen Rao — Building scalable, automated, high-performance web systems.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-teal-100/80 sm:text-lg">
            Helping startups scale with automation & performance-driven design.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#projects" className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-[#0B0F14] shadow-[0_0_30px_rgba(34,211,238,0.25)] transition hover:shadow-[0_0_40px_rgba(34,211,238,0.45)]">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-teal-400/30 bg-white/5 px-6 py-3 text-sm font-semibold text-teal-100 backdrop-blur-md hover:border-teal-300/60">
              Hire Me
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 opacity-80">
            <img src="/logos/aws.svg" alt="AWS" className="h-6" />
            <img src="/logos/docker.svg" alt="Docker" className="h-6" />
            <img src="/logos/shopify.svg" alt="Shopify" className="h-6" />
            <img src="/logos/nextjs.svg" alt="Next.js" className="h-6 invert" />
          </div>

          <div className="pointer-events-none absolute inset-x-0 -bottom-20 h-40 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}
