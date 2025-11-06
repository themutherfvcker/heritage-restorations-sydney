import Link from "next/link";

export default function CTAButton({
  href = "#",
  children,
  className = "",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md bg-forest-green px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition";
  const combined = `${baseClasses} ${className}`.trim();

  // If it's an external link or plain href, render <a>
  if (!href || href === "#") {
    return (
      <button className={combined} type="button" {...props}>
        {children}
      </button>
    );
  }

  if (href.startsWith("http")) {
    return (
      <a href={href} className={combined} {...props}>
        {children}
      </a>
    );
  }

  // Internal Next.js link
  return (
    <Link href={href} legacyBehavior>
      <a className={combined} {...props}>
        {children}
      </a>
    </Link>
  );
}
