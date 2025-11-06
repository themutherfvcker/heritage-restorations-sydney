export default function ServiceSection({
  title,
  subtitle,
  children,
  className = "",
  ...props
}) {
  return (
    <section
      className={`mb-10 border-b border-gray-200 pb-8 last:border-b-0 ${className}`}
      {...props}
    >
      {title && (
        <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-2">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="text-base md:text-lg text-gray-600 mb-4">{subtitle}</p>
      )}

      <div className="prose prose-lg max-w-none text-gray-800">
        {children}
      </div>
    </section>
  );
}
