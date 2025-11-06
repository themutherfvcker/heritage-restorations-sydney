export default function ServiceHero({
  title,
  subtitle,
  intro,
  image,
  tag = "Heritage Service",
  className = "",
  children,
  ...props
}) {
  const heroTitle = title || "Heritage service";
  const heroIntro =
    intro ||
    "Specialist heritage restoration for Sydney terraces, cottages and character homes.";
  const heroImage = image || "/images/service-hero-placeholder.jpg";

  return (
    <section
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            {tag && (
              <p className="text-xs md:text-sm font-semibold tracking-wide text-forest-green mb-2 uppercase">
                {tag}
              </p>
            )}
            {subtitle && (
              <p className="text-sm text-heritage-brown mb-2">
                {subtitle}
              </p>
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              {heroTitle}
            </h1>
            {heroIntro && (
              <p className="text-base md:text-lg text-gray-700 mb-4">
                {heroIntro}
              </p>
            )}

            {/* Any children passed from MDX (eg. CTAButton, small lists, badges) */}
            {children && <div className="mt-4 flex flex-wrap gap-3">{children}</div>}
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-sandstone border border-heritage-brown/10">
              <img
                src={heroImage}
                alt={heroTitle}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
