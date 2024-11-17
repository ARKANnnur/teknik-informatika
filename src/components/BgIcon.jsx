import { useEffect, useRef } from "react";
import { TbEyeSearch } from "react-icons/tb";
import { FaBullseye } from "react-icons/fa";
import { PiTargetBold } from "react-icons/pi";
import { AiOutlinePython } from "react-icons/ai";
import { IoLogoNodejs } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaRust } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import gsap from "gsap";

function BgIcon() {
  const containerRef = useRef(null);

  const icons = [
    { Icon: TbEyeSearch, type: "icon", color: "text-dark-50" },
    { Icon: "/FTS.png", type: "img", color: "text-blue-700" },
    { Icon: FaBullseye, type: "icon", color: "text-red-500" },
    { Icon: PiTargetBold, type: "icon", color: "text-light-100" },
    { Icon: AiOutlinePython, type: "icon", color: "text-light-600" },
    { Icon: IoLogoNodejs, type: "icon", color: "text-light-700" },
    { Icon: FaReact, type: "icon", color: "text-light-800" },
    { Icon: FaRust, type: "icon", color: "text-red-600" },
    { Icon: FaGolang, type: "icon", color: "text-red-700" },
    { Icon: "/FTS.png", type: "img", color: "text-blue-700" },
  ];

  useEffect(() => {
    const iconElements = containerRef.current.children;

    // Random position for each icon
    Array.from(iconElements).forEach((icon) => {
      const randomX = Math.random() * 80 + 10; // 10% to 90% of viewport width
      const randomY = Math.random() * 280 + 10; // 10% to 290% of viewport height
      const randomRotation = Math.random() * 360;
      const randomScale = 0.8 + Math.random() * 0.4; // 0.8 to 1.2

      gsap.set(icon, {
        xPercent: -50,
        yPercent: -50,
        x: `${randomX}vw`,
        y: `${randomY}vh`,
        rotation: randomRotation,
        scale: randomScale,
      });

      // Floating animation
      gsap.to(icon, {
        y: `${randomY + 20}vh`,
        rotation: randomRotation + 10,
        duration: 2 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Subtle rotation
      gsap.to(icon, {
        rotation: `+=${Math.random() * 20 - 10}`,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 h-full w-full">
      {icons.map(({ Icon, type, color }, index) =>
        type === "icon" ? (
          <Icon
            key={index}
            className={`absolute z-0 h-20 w-20 transition-colors duration-300 ${color} opacity-20 hover:opacity-40`}
          />
        ) : (
          <img
            key={index}
            src={Icon}
            alt={`icon-${index}`}
            className="absolute z-0 h-20 w-20 opacity-20 hover:opacity-40"
          />
        ),
      )}
    </div>
  );
}

export default BgIcon;
