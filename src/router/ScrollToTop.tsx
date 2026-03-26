import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to top on real route changes (pathname / search).
 * Does not depend on `hash` so in-page anchors (#section) keep working.
 * Skips the first paint when the app loads at `/#anchor` so the browser can land on the target.
 */
export default function ScrollToTop() {
  const location = useLocation();
  const isFirstPaint = useRef(true);

  useLayoutEffect(() => {
    const isHomeWithHash =
      location.pathname === "/" && location.hash.length > 1;

    if (isFirstPaint.current && isHomeWithHash) {
      isFirstPaint.current = false;
      return;
    }
    isFirstPaint.current = false;

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    // Hash-only navigation (e.g. guide TOC) must not trigger scroll-to-top.
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentionally omit location.hash
  }, [location.pathname, location.search]);

  return null;
}
