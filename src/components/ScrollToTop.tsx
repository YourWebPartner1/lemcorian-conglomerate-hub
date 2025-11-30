import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // Refresh AOS on route change
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

