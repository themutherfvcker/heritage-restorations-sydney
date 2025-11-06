export default function MaterialsTable({
  caption,
  children,
  className = "",
  ...props
}) {
  return (
    <div className={`overflow-x-auto my-8 ${className}`}>
      <table
        className="min-w-full border-collapse text-sm md:text-base"
        {...props}
      >
        {caption && (
          <caption className="text-left text-xs md:text-sm text-gray-500 mb-2">
            {caption}
          </caption>
        )}
        {children}
      </table>
    </div>
  );
}
