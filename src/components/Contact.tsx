import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send, MessageCircle, Phone } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Using Formspree as a reliable, free, no-backend solution for static portfolios
    // User needs to replace 'YOUR_FORM_ID' with their actual Formspree endpoint ID
    const formEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
    
    try {
      // If endpoint is not configured, fallback to mailto immediately
      if (formEndpoint.includes('YOUR_FORM_ID')) {
        const mailtoLink = `mailto:fatmanour048@gmail.com?subject=${encodeURIComponent(
          formData.subject
        )}&body=${encodeURIComponent(
          `Hi Fatma,\n\nMy name is ${formData.name}.\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
        )}`;
        window.open(mailtoLink, '_blank');
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          }),
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setSubmitStatus('error');
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      {/* Background glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="eyebrow">Get in Touch</span>
          <h2 className="section-title mt-3 mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="theme-text-secondary max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-7">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-5">
                <a href="mailto:fatmanour048@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-slate-800 border theme-border flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-xs theme-text-muted mb-0.5">Email</p>
                    <p className="text-sm theme-text-secondary group-hover:text-primary-400 transition-colors">fatmanour048@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-slate-800 border theme-border flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-xs theme-text-muted mb-0.5">Location</p>
                    <p className="text-sm theme-text-secondary">Egypt</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-slate-800 border theme-border flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-xs theme-text-muted mb-0.5">Availability</p>
                    <p className="text-sm theme-text-secondary">Open for opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-7">
              <h3 className="text-lg font-bold mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/fatma-nour-ai-trainer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center theme-text-secondary transition-all duration-300 hover:bg-blue-500/20 hover:text-blue-400 hover:scale-110"
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                {/* GitHub */}
                <a
                  href="https://github.com/Fatoomnoour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center theme-text-secondary transition-all duration-300 hover:bg-gray-500/20 hover:scale-110"
                  title="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/+201097430973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center theme-text-secondary transition-all duration-300 hover:bg-green-500/20 hover:text-green-400 hover:scale-110"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="glass rounded-2xl p-7 bg-gradient-to-br from-primary-600/10 to-accent-500/10 border-primary-500/20">
              <h3 className="text-lg font-bold mb-2">Ready to start?</h3>
              <p className="text-sm theme-text-secondary mb-4">
                Whether you need data solutions, curriculum development, or academy setup — let's make it happen.
              </p>
              <a
                href="mailto:fatmanour048@gmail.com"
                className="button-primary w-full sm:w-auto"
              >
                <Mail className="w-4 h-4" />
                Email Me Directly
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium theme-text-secondary mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl theme-input-bg theme-input-text border theme-border placeholder-slate-400 dark:placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 focus:outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium theme-text-secondary mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl theme-input-bg theme-input-text border theme-border placeholder-slate-400 dark:placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 focus:outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium theme-text-secondary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl theme-input-bg theme-input-text border theme-border placeholder-slate-400 dark:placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 focus:outline-none transition-all"
                  placeholder="How can I help you?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium theme-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl theme-input-bg theme-input-text border theme-border placeholder-slate-400 dark:placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 focus:outline-none transition-all resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto button-primary ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Message ready!</span>
                )}
                {submitStatus === 'error' && (
                  <span className="text-sm font-medium text-red-600 dark:text-red-400">Failed to send. Please use direct email.</span>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
