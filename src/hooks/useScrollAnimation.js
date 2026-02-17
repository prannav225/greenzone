import { useEffect, useRef, useState } from "react";

/**
 * Hook to detect when an element enters the viewport.
 * Returns a ref to attach to the element and a boolean indicating visibility.
 *
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Threshold for visibility (0.0 - 1.0)
 * @param {string} options.rootMargin - Margin around root to trigger earlier/later
 * @param {boolean} options.triggerOnce - Whether to trigger only once (default: true)
 * @returns {[React.RefObject, boolean]} - [ref, isVisible]
 */
export default function useScrollAnimation({
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
} = {}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [elementRef, isVisible];
}
