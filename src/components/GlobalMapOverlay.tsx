import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GlobalMapOverlay = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 0.15 : 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Simplified World Map SVG - Low opacity, subtle animation */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid meet"
        style={{ filter: "blur(1px)" }}
      >
        {/* Continents - Simplified shapes */}
        {/* North America */}
        <path
          d="M 150 150 Q 200 120 250 140 Q 300 160 350 150 Q 400 140 450 160 Q 500 180 480 220 Q 460 260 420 280 Q 380 300 340 290 Q 300 280 260 270 Q 220 260 180 240 Q 140 220 130 180 Q 120 140 150 150 Z"
          fill="currentColor"
          className="text-primary"
          opacity="0.4"
        />
        
        {/* South America */}
        <path
          d="M 280 320 Q 300 310 320 330 Q 340 350 360 380 Q 380 410 370 450 Q 360 490 340 510 Q 320 530 300 520 Q 280 510 260 480 Q 240 450 250 400 Q 260 350 280 320 Z"
          fill="currentColor"
          className="text-primary"
          opacity="0.4"
        />
        
        {/* Europe */}
        <path
          d="M 500 100 Q 550 90 600 110 Q 650 130 680 150 Q 710 170 700 200 Q 690 230 660 240 Q 630 250 600 245 Q 570 240 540 230 Q 510 220 490 190 Q 470 160 500 100 Z"
          fill="currentColor"
          className="text-primary"
          opacity="0.4"
        />
        
        {/* Africa */}
        <path
          d="M 550 200 Q 600 190 650 210 Q 700 230 720 280 Q 740 330 730 400 Q 720 470 690 500 Q 660 530 620 520 Q 580 510 560 460 Q 540 410 540 350 Q 540 290 550 200 Z"
          fill="currentColor"
          className="text-primary"
          opacity="0.4"
        />
        
        {/* Asia */}
        <path
          d="M 700 80 Q 800 70 900 100 Q 1000 130 1050 180 Q 1100 230 1080 280 Q 1060 330 1020 360 Q 980 390 930 380 Q 880 370 830 340 Q 780 310 750 260 Q 720 210 700 80 Z"
          fill="currentColor"
          className="text-primary"
          opacity="0.4"
        />
        
        {/* Australia */}
        <path
          d="M 900 420 Q 950 410 980 440 Q 1010 470 1000 500 Q 990 530 960 540 Q 930 550 900 530 Q 870 510 870 480 Q 870 450 900 420 Z"
          fill="currentColor"
          className="text-primary"
          opacity="0.4"
        />
      </svg>
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 0%, rgba(10, 26, 63, 0.1) 100%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default GlobalMapOverlay;

