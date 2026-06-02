export default function Card({ className = "", title, children, href, noPadding = false }) {
  const Tag = href ? "a" : "div";
  const linkProps = href ? { href, target: "_blank", rel: "noreferrer" } : {};

  return (
    <Tag
      {...linkProps}
      className={`flex flex-col rounded-xl border border-white/[0.06] bg-white/[0.02] shadow-lg overflow-hidden transition-all duration-300 hover:border-accent/20 hover:bg-white/[0.04] active:border-accent/30 col-span-1 touch-manipulation ${noPadding ? "" : "p-4 sm:p-5"} ${className}`}
    >
      {title && (
        <h3 className={`text-sm text-gray-600 uppercase tracking-[0.15em] mb-3 shrink-0 ${noPadding ? "px-5 pt-5" : ""}`}>
          {title}
        </h3>
      )}
      <div className="flex-1 min-h-0">{children}</div>
    </Tag>
  );
}
