/**
 * ImmersiveContainer Component
 *
 * A reusable container with a background image, glassmorphic overlay,
 * and consistent rounded styling (3rem). Used for program intros and
 * outcome sections.
 */
const optimizeImage = (url) => {
  if (!url) return url;
  if (typeof url !== "string") return url;
  if (url.includes("images.unsplash.com")) {
    if (url.includes("?")) {
      return url
        .replace(/w=\d+/, "w=1200")
        .replace(/q=\d+/, "q=75")
        .replace(/auto=[^&]+/, "auto=format");
    }
    return `${url}?auto=format&fit=crop&q=75&w=1200`;
  }
  return url;
};

export default function ImmersiveContainer({
  bgImage,
  alt = "Background",
  overlayOpacity = "opacity-40",
  className = "",
  priority = false,
  children,
}) {
  return (
    <div
      className={`relative group py-5 lg:rounded-3xl rounded-2xl overflow-hidden border border-white/10 md:border-white/10 ${className}`}
    >
      {/* Background Image & Overlay */}
      {bgImage && (
        <div className="absolute inset-0">
          <img
            src={optimizeImage(bgImage)}
            alt={alt}
            className={`w-full h-full object-cover ${overlayOpacity} group-hover:scale-105 transition-transform duration-1000`}
            loading={priority ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-linear-to-br from-forest-deep/95 via-forest-deep/80 to-forest-deep/95" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 p-5 sm:p-14 md:p-20">{children}</div>
    </div>
  );
}
