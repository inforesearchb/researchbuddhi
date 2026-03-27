import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us – ResearchBuddhi",
  description:
    "Learn about ResearchBuddhi's mission to empower PhD scholars and researchers with expert academic assistance. Meet our team of qualified research professionals.",
};

const values = [
  {
    icon: "🎯",
    title: "Academic Integrity",
    desc: "We uphold the highest standards of scholarly ethics. Every project is original, properly cited, and built on credible sources.",
  },
  {
    icon: "🤝",
    title: "Scholar-First Philosophy",
    desc: "Your success is our mission. Every solution designed around researcher needs.",
  },
  {
    icon: "💡",
    title: "Research Excellence",
    desc: "We stay current with evolving academic standards, methodologies, and publication requirements across all disciplines.",
  },
  {
    icon: "🔐",
    title: "Trust & Confidentiality",
    desc: "Every engagement is protected by strict confidentiality agreements. Your research and identity are always safe with us.",
  },
];

const team = [
  {
    name: "Structured Research Planning",
    role: "",
    expertise: "",
    initials: "📑",
    color: "bg-primary",
    desc: "Clear research direction through well-defined methodology and academic alignment.",
  },
  {
    name: "Analytical & Technical Support",
    role: "",
    expertise: "",
    initials: "📈",
    color: "bg-secondary",
    desc: "Data-driven analysis and technical precision to strengthen research outcomes..",
  },
  {
    name: "Quality & Publication Readiness",
    role: "",
    expertise: "",
    initials: "✅",
    color: "bg-green-200",
    desc: "Comprehensive review ensuring clarity, compliance, and journal preparedness.",
  },
];

const milestones = [
  { year: "2015", title: "ResearchBuddhi Founded", desc: "Started as a small PhD consulting group in Noida." },
  { year: "2018", title: "500 Scholars Milestone", desc: "Expanded to cover 10+ disciplines across India." },
  { year: "2021", title: "Journal Publication Support", desc: "Launched dedicated service for Scopus & SCI journal submissions." },
  { year: "2024", title: "2,000+ Scholars Served", desc: "Became one of India's most trusted academic research partners." },
  { year: "2026", title: "Pan-India Presence", desc: "Now serving scholars in 28 states across all major universities." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary to-secondary pt-32 pb-20 px-4 overflow-hidden">
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
            About ResearchBuddhi
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Empowering Scholars <br /> <span className="text-accent">Elevating Research</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            A dedicated academic support ecosystem designed to help scholars transform ideas into impactful research outcomes since 2015.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-heading mt-2 mb-5">
                Our Journey
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Research today demands more than knowledge. It requires clarity, structure, technical precision, and adherence to evolving academic standards.
                </p>
                <p>
                  Recognizing the growing challenges faced by scholars, researchers, and academicians, our organization was established to bridge the gap between research potential and successful execution.
                </p>
                <p>
                  What began as a collaborative academic initiative has evolved into a structured research support platform helping scholars navigate every stage of their research journey with confidence and clarity.
                </p>
                <p>
                  Today, we are a team of 50+ domain experts spanning engineering, medicine, social sciences, law, and pure sciences united by one goal: to help every scholar present their research with clarity, rigor, and confidence.
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "2,000+", label: "Scholars Helped", sub: "Across India and abroad" },
                { value: "50+", label: "PhD Experts", sub: "In-house research team" },
                { value: "28", label: "States Covered", sub: "Pan-India presence" },
                { value: "9+", label: "Years of Excellence", sub: "Established in 2015" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gradient-to-br from-primary-50 to-blue-100 rounded-2xl p-6 border border-blue-200 text-center"
                >
                  <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="font-semibold text-gray-900 text-sm">{stat.label}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To democratise access to world-class academic research support enabling every PhD scholar,
                student, and researcher, regardless of their institution or background, to produce research
                that meets international standards of excellence.
              </p>
              <div className="mt-6 space-y-2">
                {["Expert guidance at every stage", "Affordable, transparent pricing", "Inclusive support across disciplines"].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
              <p className="text-blue-100 leading-relaxed">
                To become the most trusted academic research partner in South Asia building a world where
                no researcher is left struggling alone, and every piece of academic work reaches its full
                potential through expert collaboration.
              </p>
              <div className="mt-6 space-y-2">
                {["Lead India's academic research ecosystem", "Publish 1,000+ journal papers yearly", "Build a community of 10,000+ scholars"].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm text-blue-100">
                    <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Our Values</span>
            <h2 className="section-heading mt-2">What Makes Us Different</h2>
            <p className="section-subheading max-w-xl mx-auto">
              These principles guide every project we take on and every relationship we build with our scholars.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card hover:border-secondary/40 border border-transparent text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {v.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Our Journey</span>
            <h2 className="section-heading mt-2">Milestones That Define Us</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-6 pl-14 relative">
                  <div className="absolute left-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xs">{m.year}</span>
                  </div>
                  <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 flex-1 hover:shadow-lg transition-shadow">
                    <h3 className="font-bold text-gray-900">{m.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Ecosystem</span>
            <h2 className="section-heading mt-2">Our Research Ecosystem</h2>
            <p className="section-subheading max-w-xl mx-auto">
              A structured support system designed to guide scholars through every stage of research.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="card border border-gray-100 text-center group hover:border-secondary/40">
                <div className={`w-20 h-20 ${member.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl shadow-lg group-hover:scale-105 transition-transform duration-200`}>
                  {member.initials}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                <p className="text-secondary font-medium text-sm mt-0.5">{member.role}</p>
                <p className="text-gray-500 text-xs mt-0.5 mb-3">{member.expertise}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work With Our Experts?"
        subtitle="Whether beginning a thesis, refining analysis, or preparing for publication, we provide the expertise and structure needed to move forward with confidence."
        primaryLabel="Schedule a Free Call"
      />
    </>
  );
}
