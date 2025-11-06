export default function Testimonial({
  name,
  location,
  children,
  quote,
  className = "",
  ...props
}) {
  const content = quote || children;

  return (
    <figure
      className={`border-l-4 border-forest-green bg-white/80 p-5 rounded-md shadow-sm mb-8 ${className}`}
      {...props}
    >
      <blockquote className="text-gray-800 italic">
        “{content}”
      </blockquote>
      {(name || location) && (
        <figcaption className="mt-3 text-sm text-gray-600">
          {name && <span className="font-semibold text-charcoal">{name}</span>}
          {name && location && <span> · </span>}
          {location && <span>{location}</span>}
        </figcaption>
      )}
    </figure>
  );
}
