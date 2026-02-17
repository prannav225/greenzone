/**
 * ImmersiveContainer Component
 *
 * A reusable container with a background image, glassmorphic overlay,
 * and consistent rounded styling (3rem). Used for program intros and
 * outcome sections.
 */
export default function ImmersiveContainer({
  bgImage,
  alt = "Background",
  overlayOpacity = "opacity-40",
  className = "",
  children,
}) {
  return (
    <div
      className={`relative group rounded-[3rem] overflow-hidden border border-white/10 ${className}`}
    >
      {/* Background Image & Overlay */}
      {bgImage && (
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt={alt}
            className={`w-full h-full object-cover ${overlayOpacity} group-hover:scale-105 transition-transform duration-1000`}
          />
          <div className="absolute inset-0 bg-linear-to-br from-forest-deep/95 via-forest-deep/80 to-forest-deep/95" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 p-10 md:p-20">{children}</div>
    </div>
  );
}
