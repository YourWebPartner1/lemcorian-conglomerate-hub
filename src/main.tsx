import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS on page load
AOS.init({
  duration: 800,
  offset: 120,
  easing: "ease-out",
  once: true,
  disable: window.innerWidth < 768 ? "phone" : false,
});

// Global fade-in on page load
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease-in";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

createRoot(document.getElementById("root")!).render(<App />);
