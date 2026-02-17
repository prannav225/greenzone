import Section from "./Section";
import ImmersiveContainer from "./ImmersiveContainer";

/**
 * IntroSection Component
 *
 * A standardized two-column intro section for program pages (EQ, NLP, OBL, Agri).
 * Features a background image, a title with optional glow/italic part,
 * two columns of text, and an optional quote card.
 */
export default function IntroSection({
  id,
  title, // Array: [regular, italic/glow]
  subtitle,
  subtitleIcon,
  bgImage,
  mainText,
  subText,
  quote,
  children, // Optional grid of feature cards or other content
  className = "",
  containerClassName = "",
}) {
  return (
    <Section
      id={id}
      variant="forest"
      subtitle={subtitle}
      subtitleIcon={subtitleIcon}
      padding="sm"
      className={className}
      title={
        title && (
          <>
            {title[0]} <br />
            <span className="text-accent-gold italic">{title[1]}</span>
          </>
        )
      }
    >
      <ImmersiveContainer
        bgImage={bgImage}
        alt={title?.[1] || "Background"}
        className={containerClassName}
      >
        <div
          className={`grid lg:grid-cols-2 gap-16 lg:gap-24 ${children ? "mb-20" : ""}`}
        >
          <div className="space-y-6">
            <div className="w-12 h-1 bg-accent-gold/40 mb-10" />
            {mainText && (
              <p className="text-2xl md:text-3xl lg:text-4xl text-white font-heading font-black leading-tight tracking-tighter">
                {mainText}
              </p>
            )}
            {subText && (
              <p className="text-lg text-white/60 leading-relaxed font-medium">
                {subText}
              </p>
            )}
          </div>

          <div className="flex flex-col justify-center">
            {quote && (
              <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                <p className="text-lg text-white/50 leading-relaxed font-medium italic">
                  "{quote}"
                </p>
              </div>
            )}
          </div>
        </div>

        {children}
      </ImmersiveContainer>
    </Section>
  );
}
