import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useRouteScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.dispatchEvent(new CustomEvent("northstar:smooth-scroll-to", { detail: { top: 0 } }));
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - 88;
        window.dispatchEvent(new CustomEvent("northstar:smooth-scroll-to", { detail: { top } }));
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    scrollToTop();
  }, [hash, pathname]);
}
