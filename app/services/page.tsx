import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Services – ResearchBuddhi",
  description:
    "Explore ResearchBuddhi's full range of academic research services: thesis writing, research papers, dissertations, synopsis, editing, proofreading, and plagiarism checking.",
};

type Service = {
  id: string;
  icon: React.ReactElement;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  audience: string;
  deliverable: string;
  timeline: string;
  featured?: boolean;
};

const services: Service[] = [
  {
    id: "Admission Proposal Writing",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Admission Proposal Writing",
    tagline: "Admission proposals drafted to strengthen your academic applications",
    description:
      "A well-structured admission proposal plays a crucial role in securing acceptance into competitive academic programs. Our admission proposal support helps applicants present clear research intent, academic alignment, and strong motivation through professionally structured and institution-focused proposals. We ensure your proposal reflects originality, clarity, and alignment with university expectations while effectively communicating your research vision.",
    features: [
      "Statement of Purpose (SOP) drafting & refinement",
      "Research proposal development",
      "University-specific customization",
      "Research objectives & methodology structuring",
      "Academic language enhancement",
      "Plagiarism-free, original content",
      "Formatting as per university guidelines",
      "Revision support based on feedback",
    ],
    audience: "Admission-ready research proposal with structured academic positioning",
deliverable: "Admission-ready research proposal with structured academic positioning",
timeline: "Transforming ideas into a clear and persuasive academic proposal",
  },
  {
    id: "synopsis writing",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Synopsis writing",
    tagline: "Compelling Synopsis for Research Approval",
    description:
      "Your synopsis is the gateway to your PhD journey. A well-written synopsis clearly defines your research problem, objectives, methodology, expected contributions and convincing your doctoral committee to approve your research. Our experts craft synopses that stand out and get approved faster.",
    features: [
      "Problem statement & research gap",
"Clear research objectives",
"Hypotheses formulation",
"Proposed research methodology",
"Theoretical & conceptual framework",
"Expected contributions & originality",
"Preliminary literature review",
"Timeline & work plan",
    ],
    audience: "Research Scholars seeking to submit synopsis for RDC",
deliverable: "Complete synopsis document ready for committee submission",
timeline: "To present a concise and structured overview of the research problem, methodology, and expected outcomes for academic approval",
  },
  {
    id: "thesis writing",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: "Thesis writing",
    tagline: "From Topic Selction to Final Submission",
    description:
      "Your thesis is more than a requirement, it is the foundation of your academic identity. We provide comprehensive support throughout the entire thesis journey, helping you refine your research idea, structure your work effectively, and develop a rigorous, well-drafted thesis ready for submission and evaluation. ",
    features: [
     "Topic selection & feasibility analysis",
"Comprehensive literature review",
"Research methodology & design",
"Data collection & analysis support",
"Chapter-by-chapter writing",
"APA, MLA, Chicago citation formatting",
"Anti-plagiarism guarantee (Turnitin report included)",
"SPSS, R, NVivo, ATLAS.ti, Python support",
    ],
    audience: "PhD Scholars, M.Phil Candidates, Postgraduate Students",
deliverable: "Complete thesis manuscript with plagiarism report",
timeline: "To develop a comprehensive, original, and academically rigorous research document that fulfills degree requirements",
  },
  {
    id: "Research Paper Writing",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Research Paper Writing",
    tagline: "Publish-ready manuscripts for top-tier journals",
    description:
      "Our team of subject-matter experts helps you to prepare original, data-driven research papers structured for publication in Scopus-indexed, SCI, PubMed or NAAS rated journals. We ensure your paper meets the editorial standards of your target journal while clearly presenting your findings and contributions. ",
    features: [
      "Original research article writing",
"Journal-specific formatting (APA, IEEE, AMA, etc.)",
"Abstract & keyword optimisation",
"Statistical analysis & data visualisation",
"Results & discussion writing",
"Cover letter for journal submission",
"Response to reviewer comments",
"Scopus/SCI journal targeting",
    ],
    audience: "PhD Scholars, Researchers, Faculty Members, Postgraduate Students",
deliverable: "Peer-review ready manuscript + submission package",
timeline: "To produce a well-structured, evidence-based manuscript suitable for publication in scopus/SCI/PubMed journals",
  },
  {
    id: "Review Paper Writing",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: "Review Paper Writing",
    tagline: "Systematic and Bibliometric reviews that add scholarly value",
    description:
      "Literature review papers require deep domain knowledge and strong synthesis skills. Our experts produce systematic reviews, meta-analyses, and bibliometric reviews that survey the existing body of knowledge, identify research gaps, and propose future directions, all in line with PRISMA and other established review protocols.",
    features: [
      "Systematic literature review (SLR)",
"Meta-analysis support",
"PRISMA flow diagram",
"200+ source synthesis",
"Research gap identification",
"Bibliometric analysis",
"Narrative & scoping reviews",
"Thematic analysis & coding",
    ],
    audience: "PhD Scholars, Researchers, Faculty Members, Postgraduate Students",
deliverable: "Comprehensive review paper with PRISMA flow chart",
timeline: "To critically analyze and synthesize existing literature to identify trends, gaps, and future research directions.",
  },
  {
    id: "Dissertation Support",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: "Dissertation Support",
    tagline: "Complete dissertation assistance",
    description:
      "A master’s dissertation is a critical component of postgraduate study, requiring strong research structure, analytical depth, and academic clarity. Our dissertation support helps students transform their research ideas into well-organized, academically rigorous work aligned with university guidelines.",
    features: [
      "Dissertation proposal writing",
"Conceptual framework development",
"Primary & secondary research design",
"Quantitative & qualitative data analysis",
"SPSS, R, NVivo, ATLAS.ti support",
"Full dissertation writing (all chapters)",
 "Univeristy adherence formatting",
"Post-viva revision support",
    ],
    audience: "Masters/Postgraduate Students, DBA Scholars, MD",
deliverable: "Full dissertation with analysis and plagiarism report ",
timeline: "To conduct systematic research demonstrating analytical depth, methodological accuracy, and scholarly contribution",
  },
  {
    id: "Editing & Proofreading",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Editing & Proofreading",
    tagline: "Elevate your writing to publication standards",
    description:
      "Even brilliant research can be undermined by poor writing, grammatical errors, or unclear presentation. Our academic editing service refines your manuscript at every level from sentence-level grammar corrections to structural improvements ensuring your ideas shine with the clarity they deserve.",
    features: [
      "Grammar, spelling & punctuation correction",
"Sentence clarity & readability improvement",
"Academic tone & register enhancement",
"Logical flow & structural editing",
"Consistency in terminology & style",
"Citation & reference formatting",
"Track-changes document returned",
"Editor's detailed feedback report",
    ],
    audience: "Researchers, PhD Scholars, Students, Non-native English Speakers",
deliverable: "Edited document with track-changes + clean version",
timeline: "To enhance clarity, coherence, and academic accuracy while ensuring language precision and formatting compliance.",
  },
];

export default function ServicesPage() {
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
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Expert Help for{" "}
            <span className="text-accent">Every Research Need</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            From the first word of your synopsis to the final submission of your thesis
            ResearchBuddhi has a specialised service for every stage of your academic journey.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-blue-100 hover:text-white text-sm px-4 py-2 rounded-full transition-all duration-200"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`rounded-3xl overflow-hidden border shadow-md hover:shadow-xl transition-shadow duration-300 scroll-mt-24 ${
                service.featured
                  ? "bg-gradient-to-br from-primary-900 to-primary border-primary"
                  : "bg-white border-gray-100"
              }`}
            >
              <div className="p-8 lg:p-10">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left: Main info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-5">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                          service.featured ? "bg-white/20 text-white" : "bg-primary-50 text-primary"
                        }`}
                      >
                        {service.icon}
                      </div>
                      <div>
                        {service.featured && (
                          <span className="inline-flex items-center gap-1.5 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                            Most Popular
                          </span>
                        )}
                        <h2
                          className={`text-2xl font-bold ${
                            service.featured ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {service.title}
                        </h2>
                        <p
                          className={`text-sm font-medium ${
                            service.featured ? "text-blue-200" : "text-secondary"
                          }`}
                        >
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    <p
                      className={`leading-relaxed mb-6 ${
                        service.featured ? "text-blue-100" : "text-gray-600"
                      }`}
                    >
                      {service.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className={`flex items-start gap-2 text-sm ${
                            service.featured ? "text-blue-100" : "text-gray-700"
                          }`}
                        >
                          <svg
                            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                              service.featured ? "text-accent" : "text-secondary"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Quick info */}
                  <div>
                    <div
                      className={`rounded-2xl p-6 space-y-5 ${
                        service.featured ? "bg-white/10 backdrop-blur-sm border border-white/20" : "bg-gray-50 border border-gray-200"
                      }`}
                    >
                      <div>
                        <p
                          className={`text-xs uppercase tracking-wide font-semibold mb-1.5 ${
                            service.featured ? "text-blue-300" : "text-gray-500"
                          }`}
                        >
                          Best For
                        </p>
                        <p
                          className={`text-sm font-medium ${
                            service.featured ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {service.audience}
                        </p>
                      </div>

                      <div>
                        <p
                          className={`text-xs uppercase tracking-wide font-semibold mb-1.5 ${
                            service.featured ? "text-blue-300" : "text-gray-500"
                          }`}
                        >
                          What You Receive
                        </p>
                        <p
                          className={`text-sm font-medium ${
                            service.featured ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {service.deliverable}
                        </p>
                      </div>

                      <div>
                        <p
                          className={`text-xs uppercase tracking-wide font-semibold mb-1.5 ${
                            service.featured ? "text-blue-300" : "text-gray-500"
                          }`}
                        >
                          Objective
                        </p>
                        <p
                          className={`text-sm font-medium ${
                            service.featured ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {service.timeline}
                        </p>
                      </div>

                      <div className="pt-2 space-y-3">
                        <Link
                          href="/contact"
                          className={`flex items-center justify-center gap-2 w-full font-semibold py-3 px-5 rounded-xl transition-all duration-200 text-sm ${
                            service.featured
                              ? "bg-accent hover:bg-accent-dark text-white"
                              : "bg-primary hover:bg-primary-700 text-white"
                          }`}
                        >
                          Get Started
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                        <a
                          href="https://wa.me/919999999999"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center gap-2 w-full font-semibold py-3 px-5 rounded-xl transition-all duration-200 text-sm ${
                            service.featured
                              ? "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                              : "bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] border border-[#25D366]/30"
                          }`}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
                          </svg>
                          WhatsApp Query
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Not Sure Which Service You Need?"
        subtitle="Talk to our research advisors for free. We'll assess your requirements and recommend the best path forward for your academic goals."
        primaryLabel="Get Free Advice"
      />
    </>
  );
}
