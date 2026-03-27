import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us – ResearchBuddhi",
  description:
    "Get in touch with ResearchBuddhi for expert academic research assistance. Fill our contact form or WhatsApp us for a free consultation on your thesis, research paper, or dissertation.",
};

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone / WhatsApp",
    value: "+91 99999 99999",
    href: "tel:+919999999999",
    sub: "Mon–Sat, 9 AM – 7 PM IST",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "support@researchbuddhi.com",
    href: "mailto:support@researchbuddhi.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Office",
    value: "New Delhi – 110001, India",
    href: "#map",
    sub: "By appointment only",
  },
];

const faqs = [
  {
    q: "How quickly can you start on my work?",
    a: "We typically start within 24–48 hours of receiving your requirements and confirming the research scope.",
  },
  {
    q: "Is my research and personal information kept confidential?",
    a: "Absolutely. All work are covered by a strict NDA. We never share your identity, topic, or research content with any third party.",
  },
  {
    q: "Do you offer revisions after delivery?",
    a: "Yes, we offer revisions within the agreed scope. Your satisfaction is our commitment. We refine until you're fully happy.",
  },
  {
    q: "Which disciplines do you cover?",
    a: "We cover 30+ disciplines including Engineering, Medicine, Life Sciences, Social Sciences, Management, Law, Pure Sciences, Humanities, and more.",
  },
  {
    q: "How do I pay for your services?",
    a: "We accept payments via UPI, bank transfer, and major credit/debit cards.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary to-secondary pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium text-blue-100 mb-6">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Let's Talk About{" "}
            <span className="text-accent">Your Research</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Get a free consultation with our research advisors. Tell us about your research idea and
            we'll propose the best way to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20need%20help%20with%20my%20research%20work.%20Can%20we%20discuss%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366] hover:bg-[#20b858] text-white rounded-2xl p-5 shadow-lg shadow-green-200 transition-all duration-200 hover:scale-[1.02] group"
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg">Chat on WhatsApp</p>
                  <p className="text-green-100 text-sm"></p>
                </div>
                <svg className="w-5 h-5 ml-auto flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 space-y-5">
                <h3 className="font-bold text-gray-900 text-lg">Contact Details</h3>
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-200 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wide">{info.label}</p>
                      <p className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                      <p className="text-gray-400 text-xs">{info.sub}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Office Hours */}
              <div className="bg-primary rounded-2xl p-6">
                <h3 className="font-bold text-white mb-4 text-lg">Office Hours</h3>
                <div className="space-y-2">
                  {[
                    { day: "Monday – Saturday", hours: "9:00 AM – 6:00 PM IST" },
                    
                    { day: "Sunday", hours: "Closed (WhatsApp available)" },
                  ].map((slot) => (
                    <div key={slot.day} className="flex justify-between text-sm">
                      <span className="text-blue-200">{slot.day}</span>
                      <span className="text-white font-medium">{slot.hours}</span>
                    </div>
                  ))}
                </div>
                
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
                <p className="text-gray-600 mt-1">
                  Fill in the form and our team will reach out within 24 hours with a personalised response.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section id="map" className="px-4 pb-0 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-md border border-gray-200 h-72 bg-gradient-to-br from-primary-50 to-blue-100 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-primary font-semibold text-lg">ResearchBuddhi Headquarters</p>
              <p className="text-gray-600 text-sm mt-1">New Delhi – 110001, India</p>
              <a
                href="https://maps.google.com/?q=New+Delhi,India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-secondary hover:text-primary text-sm font-medium mt-3 transition-colors"
              >
                Open in Google Maps
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="section-heading mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-secondary/40 hover:shadow-lg transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">Q</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
