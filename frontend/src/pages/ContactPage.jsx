import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';
import { Mail, Phone, MapPin, Send, HelpCircle, Shield, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const { success } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    success('Thank you! Your pilgrimage heritage query has been submitted.');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const faqs = [
    { q: 'Is the information verified by temple trusts and devasthanams?', a: 'Yes. All listings are curated and cross-referenced from official devasthanam records, state tourism departments, and archaeological documentation.' },
    { q: 'Are online puja or donation bookings supported on this portal?', a: 'No. As per scope, this is an informational and research repository. For bookings, please use the official devasthanam portal links listed on each temple page.' },
    { q: 'What is the standard dress code for traditional temple sanctums in South India?', a: 'Most traditional sanctums require Dhotis/Panchas or Kurta-Pyjamas for men and Sarees or Salwar Suits with Dupattas for women. Western shorts and sleeveless tops are restricted.' },
    { q: 'How can researchers or temple trusts submit new heritage data?', a: 'Administrators and verified research partners can log into the CMS or submit verified documents via our research email.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
          Inquiries & Pilgrim Assistance
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif-heading text-stone-900">
          Contact Us & Support Helpdesk
        </h1>
        <p className="text-sm text-stone-600">
          Have questions regarding a pilgrimage circuit, temple timings, or heritage documentation? Reach out to our team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Contact Information & Helplines (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-stone-900 text-white rounded-3xl p-8 space-y-6 border border-stone-800 shadow-sm">
            <h2 className="text-xl font-bold font-serif-heading text-amber-400">
              National Heritage Helpdesk
            </h2>
            <p className="text-xs text-stone-300 leading-relaxed">
              We provide assistance to pilgrims, cultural tourists, and researchers across India.
            </p>

            <div className="space-y-4 text-xs text-stone-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Central Heritage Secretariat</strong>
                  <span>Shri Kashi Corridor Complex, Varanasi, Uttar Pradesh, India</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <strong className="text-white block">Email Queries</strong>
                  <span>heritage@devalaya.gov.in</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <strong className="text-white block">Pilgrim Toll-Free Helpline</strong>
                  <span>1800-111-363 (24/7 Yatra Assistance)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-800 flex items-center gap-2 text-xs text-amber-300 font-semibold">
              <Shield className="w-4 h-4 text-amber-400" />
              <span>Official Incredible India Heritage Resource</span>
            </div>
          </div>
        </div>

        {/* Query Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
          <h2 className="text-xl font-bold text-stone-900 font-serif-heading mb-6">
            Send an Inquiry or Feedback
          </h2>

          {submitted ? (
            <div className="p-6 bg-emerald-50 text-emerald-900 rounded-2xl border border-emerald-200 text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="font-bold text-base">Message Sent Successfully!</h3>
              <p className="text-xs text-emerald-800">Our research coordinator will respond to your query shortly.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-3 px-4 py-2 bg-emerald-700 text-white rounded-xl text-xs font-bold"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Aditi Rao"
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="aditi@example.com"
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Subject / Temple Name
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Darshan timings inquiry for Kedarnath"
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Message / Details
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your inquiry or suggest temple details here..."
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-amber-700 to-saffron-600 hover:from-amber-800 hover:to-saffron-700 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Frequently Asked Questions Accordion */}
      <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200 space-y-6">
        <h2 className="text-xl font-bold text-stone-900 font-serif-heading flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-600" />
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-sm text-stone-900">{faq.q}</h3>
              <p className="text-xs text-stone-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
