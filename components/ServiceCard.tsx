import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  href?: string;
  variant?: "default" | "featured";
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  href = "/contact",
  variant = "default",
}: ServiceCardProps) {
  return (
    <div
      className={`group rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 border ${
        variant === "featured"
          ? "bg-primary text-white border-primary shadow-xl"
          : "bg-white border-gray-100 hover:border-secondary/40 shadow-md hover:shadow-xl"
      }`}
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
          variant === "featured"
            ? "bg-white/20"
            : "bg-primary-50 group-hover:bg-primary/10"
        }`}
      >
        <div className={variant === "featured" ? "text-white" : "text-primary"}>
          {icon}
        </div>
      </div>

      {/* Content */}
      <div>
        <h3
          className={`font-bold text-xl mb-2 ${
            variant === "featured" ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm leading-relaxed ${
            variant === "featured" ? "text-blue-100" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      </div>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="flex flex-col gap-1.5 mt-1">
          {features.map((feature, i) => (
            <li
              key={i}
              className={`flex items-start gap-2 text-sm ${
                variant === "featured" ? "text-blue-100" : "text-gray-600"
              }`}
            >
              <svg
                className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                  variant === "featured" ? "text-accent" : "text-secondary"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <div className="mt-auto pt-2">
        <Link
          href={href}
          className={`inline-flex items-center gap-1.5 font-semibold text-sm transition-all duration-200 group/link ${
            variant === "featured"
              ? "text-accent hover:text-white"
              : "text-primary hover:text-secondary"
          }`}
        >
          Get Started
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
