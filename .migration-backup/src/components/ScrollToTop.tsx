import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If the URL has a #hash (like #signatures), find that section and scroll to it smoothly
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If there is no hash, just instantly snap to the top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}