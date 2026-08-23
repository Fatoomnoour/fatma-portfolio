import { useState } from 'react';
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';

const email = 'fatmanour048@gmail.com';
const whatsappUrl = 'https://wa.me/201097430973?text=Hello%20Fatma%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.';

type SubmitStatus = 'idle' | 'success' | 'error';
const formEndpoint = 'https://formspree.io/f/mdenvlzq';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const updateField = (field: keyof typeof formData, value: string) => setFormData((current) => ({ ...current, [field]: value }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error(`Formspree request failed with ${response.status}`);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-28 relative section-bg-alt" aria-labelledby="contact-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12"><span className="eyebrow">Get in touch</span><h2 id="contact-title" className="section-title mt-3 mb-4">Let&apos;s <span className="text-gradient">connect.</span></h2><p className="theme-text-secondary max-w-xl mx-auto">Have a project in mind or want to collaborate? I&apos;d love to hear from you.</p></div>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-5">
            <div className="theme-bg-card border theme-border rounded-2xl p-7"><h3 className="text-xl font-semibold mb-6">Contact information</h3><div className="space-y-5"><a href={`mailto:${email}`} className="flex items-center gap-4 group rounded-md"><div className="w-11 h-11 rounded-xl bg-primary-500/10 border theme-border flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-primary-700 dark:text-primary-300" aria-hidden="true" /></div><div><p className="text-xs theme-text-muted mb-0.5">Email</p><p className="text-sm theme-text-secondary group-hover:text-primary-700 dark:group-hover:text-primary-300">{email}</p></div></a><div className="flex items-center gap-4"><div className="w-11 h-11 rounded-xl bg-primary-500/10 border theme-border flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-primary-700 dark:text-primary-300" aria-hidden="true" /></div><div><p className="text-xs theme-text-muted mb-0.5">Location</p><p className="text-sm theme-text-secondary">Egypt</p></div></div><div className="flex items-center gap-4"><div className="w-11 h-11 rounded-xl bg-primary-500/10 border theme-border flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-primary-700 dark:text-primary-300" aria-hidden="true" /></div><div><p className="text-xs theme-text-muted mb-0.5">Availability</p><p className="text-sm theme-text-secondary">Open for opportunities</p></div></div></div></div>
            <div className="theme-bg-card border theme-border rounded-2xl p-7"><h3 className="text-lg font-semibold mb-4">Follow me</h3><div className="flex gap-3"><a href="https://www.linkedin.com/in/fatma-nour-ai-trainer" target="_blank" rel="noopener noreferrer" aria-label="Fatma Nour on LinkedIn" className="social-link hover:text-blue-600 dark:hover:text-blue-400"><span aria-hidden="true">in</span></a><a href="https://github.com/Fatoomnoour" target="_blank" rel="noopener noreferrer" aria-label="Fatma Nour on GitHub" className="social-link hover:text-slate-900 dark:hover:text-white"><span aria-hidden="true">GH</span></a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Contact Fatma Nour on WhatsApp" className="social-link hover:text-green-600 dark:hover:text-green-400"><MessageCircle className="w-5 h-5" aria-hidden="true" /></a></div></div>
            <div className="theme-bg-card border border-primary-600/20 rounded-2xl p-7"><h3 className="text-lg font-semibold mb-2">Form fallback</h3><p className="text-sm theme-text-secondary mb-4">If the online form is unavailable, you can contact me directly by email.</p><a href={`mailto:${email}`} className="button-primary w-full sm:w-auto"><Mail className="w-4 h-4" aria-hidden="true" /> Email me directly</a></div>
          </div>

          <div className="lg:col-span-3"><form onSubmit={handleSubmit} className="theme-bg-card border theme-border rounded-2xl p-6 sm:p-8 space-y-6"><input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="sr-only" /><div className="grid sm:grid-cols-2 gap-6"><div><label htmlFor="contact-name" className="block text-sm font-medium theme-text-secondary mb-2">Your name</label><input id="contact-name" name="name" type="text" required autoComplete="name" value={formData.name} onChange={(event) => updateField('name', event.target.value)} className="w-full px-4 py-3 rounded-xl theme-input-bg theme-input-text border theme-border placeholder-slate-400 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 focus:outline-none transition-all" placeholder="Your name" /></div><div><label htmlFor="contact-email" className="block text-sm font-medium theme-text-secondary mb-2">Your email</label><input id="contact-email" name="email" type="email" required autoComplete="email" value={formData.email} onChange={(event) => updateField('email', event.target.value)} className="w-full px-4 py-3 rounded-xl theme-input-bg theme-input-text border theme-border placeholder-slate-400 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 focus:outline-none transition-all" placeholder="you@example.com" /></div></div><div><label htmlFor="contact-subject" className="block text-sm font-medium theme-text-secondary mb-2">Subject</label><input id="contact-subject" name="subject" type="text" required value={formData.subject} onChange={(event) => updateField('subject', event.target.value)} className="w-full px-4 py-3 rounded-xl theme-input-bg theme-input-text border theme-border placeholder-slate-400 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 focus:outline-none transition-all" placeholder="How can I help you?" /></div><div><label htmlFor="contact-message" className="block text-sm font-medium theme-text-secondary mb-2">Message</label><textarea id="contact-message" name="message" required rows={6} value={formData.message} onChange={(event) => updateField('message', event.target.value)} className="w-full px-4 py-3 rounded-xl theme-input-bg theme-input-text border theme-border placeholder-slate-400 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 focus:outline-none transition-all resize-none" placeholder="Tell me about your project or idea..." /></div><div className="flex flex-col sm:flex-row items-start sm:items-center gap-4"><button type="submit" disabled={isSubmitting} className="w-full sm:w-auto button-primary disabled:opacity-60"><Send className="w-4 h-4" aria-hidden="true" />{isSubmitting ? 'Sending…' : 'Send message'}</button>{submitStatus === 'success' && <p role="status" className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Message sent successfully.</p>}{submitStatus === 'error' && <p role="alert" className="text-sm font-medium text-red-700 dark:text-red-300">Message could not be sent. Please try again or use the email fallback.</p>}</div></form></div>
        </div>
      </div>
    </section>
  );
}
