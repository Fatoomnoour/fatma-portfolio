import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, GraduationCap, Brain, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/60 to-dark-900" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-600/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary-400 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Data Engineer & Tech Education Leader
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400 bg-clip-text text-transparent glow-text">
                Fatma Nour
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl theme-text-secondary font-medium mb-6"
            >
              Data Engineer · AI Trainer · Entrepreneur
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="theme-text-secondary text-lg max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Building the future of tech education, one line of code at a time.
              Transforming young minds through innovative coding curricula and leadership.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass">
                <GraduationCap className="w-4 h-4 text-primary-400" />
                <span className="text-sm theme-text-secondary">CS Graduate — Minya University 2025</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass">
                <Brain className="w-4 h-4 text-accent-400" />
                <span className="text-sm theme-text-secondary">AI & Data Engineering @ Digilians</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass">
                <Rocket className="w-4 h-4 text-primary-400" />
                <span className="text-sm theme-text-secondary">Founder of Kids Coding Hub</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white! font-semibold hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-xl border border-primary-500/30 text-primary-400 font-semibold hover:bg-primary-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                Let's Talk
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center gap-6"
          >
            <div className="relative w-full max-w-md">
              {/* Main avatar placeholder */}
              <div className="w-72 h-72 mx-auto rounded-3xl bg-gradient-to-br from-primary-600/30 to-accent-500/30 flex items-center justify-center animate-pulse-glow">
                <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary-700/40 to-dark-800 flex items-center justify-center">
                  <span className="text-8xl">👩‍💻</span>
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-xl"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  20+
                </div>
                <div className="text-xs theme-text-muted">Instructors Managed</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 shadow-xl"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
                  4+
                </div>
                <div className="text-xs theme-text-muted">Years Experience</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                className="absolute top-1/2 -right-12 glass rounded-2xl p-4 shadow-xl"
              >
                <div className="text-2xl font-bold text-primary-400">ICPC</div>
                <div className="text-xs theme-text-muted">Problem Solving</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs theme-text-muted">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-primary-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
