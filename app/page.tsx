import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "ResearchBuddhi – Your Trusted Academic Research Partner",
  description:
    "Expert academic research assistance for PhD scholars, college students and researchers. Thesis writing, research papers, dissertations, synopsis writing and more.",
};

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Thesis Writing",
    description: "Comprehensive thesis writing support from topic selection and literature review to final submission drafted by subject-matter experts.",
    features: ["Chapter-by-chapter guidance & Delivery", "Research methodology support", "Proper citation formatting","Data Analysis & Implementation","University Adherence Thesis Formatting",],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Research Paper Writing",
    description: "Publication-ready research papers structured for top-tier journals, with rigorous analysis and well-cited content across all disciplines.",
    features: ["Journal-specific formatting", "Statistical analysis support", "Publication Strategy Consulting","Journal Submission Assistance","Reviewer Comment Response Support"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Review Paper Writing",
    description: "Systematic and Bibliometric literature reviews that synthesize existing research, identify gaps, and provide scholarly insights.",
    features: ["Systematic review methodology", "200+ sources synthesized", "PRISMA compliant","vos-viewer & R Studio for bibliometric analysis","Meta Analysis SUpport"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Dissertation Support",
    description: "End-to-end dissertation assistance covering proposal writing, data collection, analysis, and final formatting for your master degree.",
    features: ["Full dissertation writing", "Defense preparation", "Plagiarism Free Document"],
    variant: "featured" as const,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: "Synopsis Writing",
    description: "Compelling research synopses that clearly present your study's objectives, methodology, and expected contributions for committee approval.",
    features: ["Problem statement Formulation", "Research gap identification", "Scope & objective Drafting"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Editing & Proofreading",
    description: "Thorough academic editing for grammar, structure, coherence, style and polishing your work to submission-ready.",
    features: ["Grammar & style correction", "Structural improvement", "Clarity enhancement"],
  },
];

const whyUs = [
  {
    icon: "🎓",
    title: "PhD-Qualified Experts",
    desc: "Every research is handled by domain experts with doctrate qualifications with over 5 years of research experience.",
  },
  {
    icon: "🔒",
    title: "100% Confidentiality",
    desc: "Your research, identity, and work details are protected under strict NDA. We never share your information.",
  },
  {
    icon: "⚡",
    title: "On-Time Delivery",
    desc: "We respect deadlines as much as you do. Our structured workflow ensures delivery before your due date.",
  },
  {
    icon: "🧑‍🎓",
    title: "Techincal Discussion",
    desc: "We provide technical discussion with subject matter experts to offer deeper clarity and understanding",
  },
];

const steps = [
  {
    step: "01",
    title: "Share Your Requirements",
    desc: "Tell us about your research topic, deadline, discipline, and specific requirements via, contact form, WhatsApp or Call.",
  },
  {
    step: "02",
    title: "Get Matched with an Expert",
    desc: "We assign a subject-matter expert in your field who will be your dedicated research partner throughout the work.",
  },
  {
    step: "03",
    title: "Review & Collaborate",
    desc: "Receive drafts, give feedback, and collaborate in real-time. Track progress at every stage of your work.",
  },
  {
    step: "04",
    title: "Receive & Succeed",
    desc: "Get your polished, plagiarism-free document ready for submission, publication, or presentation.",
  },
];

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "PhD Scholar",
    institution: "IIT Delhi",
    content: "ResearchBuddhi transformed my thesis journey. Their expert team helped me structure my entire thesis on machine learning in healthcare. I defended successfully with flying colors. Highly recommended for any PhD student!",
    rating: 5,
    initials: "PS",
    color: "bg-primary",
  },
  {
    name: "Rohan Mehta",
    role: "M.Tech Student",
    institution: "NIT Trichy",
    content: "I was struggling with my research paper on renewable energy systems. The team at ResearchBuddhi delivered a well-researched, journal-ready manuscript. Got accepted in a Scopus-indexed journal!",
    rating: 5,
    initials: "RM",
    color: "bg-secondary",
  },
  {
    name: "Prof. Ananya Bose",
    role: "Associate Professor",
    institution: "Jadavpur University",
    content: "The editing and proofreading service is exceptional. They improved the clarity and flow of my review paper significantly without losing the technical depth. A reliable partner for academic work.",
    rating: 5,
    initials: "AB",
    color: "bg-accent",
  },
];

const stats = [
  { value: "2,000+", label: "Scholars Assisted" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "30+", label: "Disciplines Covered" },
  { value: "50+", label: "Expert Team" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary overflow-hidden pt-20">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-3xl -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl translate-y-1/4 -translate-x-1/4" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium text-blue-100 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Trusted by 2,000+ PhD Scholars Across India
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Trusted Partner in{" "}
                <span className="text-accent">Academic Research</span>
              </h1>

              <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                From thesis writing to journal publications, ResearchBuddhi connects PhD scholars and
                researchers with domain experts to produce world-class academic work.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact" className="btn-secondary text-base py-3.5 px-7">
                  Get Free Consultation
                </Link>
                <Link href="/services" className="btn-outline border-white/60 text-white hover:bg-white hover:text-primary text-base py-3.5 px-7">
                  Explore Services
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <p className="text-2xl font-bold text-accent">{stat.value}</p>
                    <p className="text-blue-200 text-xs mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual card */}
            <div className="hidden lg:flex justify-end">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 w-full max-w-md shadow-2xl">
                <h3 className="text-white font-bold text-xl mb-6">Our Expertise Covers</h3>
                <div className="space-y-3">
                  {[
                    "Engineering & Technology",
                    "Medical & Life Sciences",
                    "Social Sciences & Humanities",
                    "Management & Commerce",
                    "Pure Sciences",
                    "Law & Governance",
                    "English & Hindi Literature",
                  ].map((field) => (
                    <div key={field} className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-blue-100 text-sm">{field}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <a
                    href="https://wa.me/919999999999?text=Hi%2C%20I%20need%20research%20help."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white font-semibold rounded-xl px-5 py-3.5 transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
                    </svg>
                    Chat Now on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest"></span>
            <h2 className="section-heading mt-2">What We Offer</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              From the first draft to the final submission, we provide end-to-end academic research
              support tailored to your specific discipline and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest"></span>
              <h2 className="section-heading mt-2">
                Why 2,000+ Scholars Trust ResearchBuddhi
              </h2>
              <p className="section-subheading mb-10">
                We combine academic expertise with a personalised approach to help every scholar
                achieve their research goals on time and with confidence.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-secondary/40 hover:shadow-md transition-all duration-200">
                    <div className="text-3xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="bg-gradient-to-br from-primary-50 to-blue-100 rounded-3xl p-8 border border-blue-200">
              <h3 className="text-primary font-bold text-lg mb-6">Client Satisfaction Snapshot</h3>
              <div className="space-y-4">
                {[
                  { label: "Research Quality", value: 98 },
                  { label: "On-Time Delivery", value: 97 },
                  { label: "Communication", value: 99 },
                  { label: "Overall Satisfaction", value: 98 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-700 font-medium">{item.label}</span>
                      <span className="text-primary font-bold">{item.value}%</span>
                    </div>
                    <div className="h-2.5 bg-blue-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-blue-200">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["PS", "RM", "AB", "KS"].map((init, i) => (
                      <div
                        key={i}
                        className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                        style={{ backgroundColor: ["#1E3A8A", "#3B82F6", "#F59E0B", "#10B981"][i] }}
                      >
                        {init}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">2,000+ satisfied scholars</p>
                    <p className="text-gray-500 text-xs">Join them today — free consultation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">How It Works</span>
            <h2 className="section-heading mt-2">Simple 4-Step Process</h2>
            <p className="section-subheading max-w-xl mx-auto">
              A simple, structured process designed to deliver expert research support with clarity and efficiency.
            </p>
          </div>

          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-secondary to-accent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div key={step.step} className="flex flex-col items-center text-center relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg mb-5 z-10">
                    <span className="text-white font-bold text-2xl">{step.step}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Testimonials</span>
            <h2 className="section-heading mt-2">What Our Scholars Say</h2>
            <p className="section-subheading max-w-xl mx-auto">
              Real stories from real researchers who achieved their academic milestones with our help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
