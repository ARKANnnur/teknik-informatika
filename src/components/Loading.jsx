import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Loading() {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;

    // Buat animasi GSAP
    gsap.to(img, {
      opacity: 0.3,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="fixed flex h-dvh w-dvw items-center justify-center bg-light-500">
      <img ref={imgRef} src="/FTS.png" alt="FTS" className="h-64 w-64" />
    </div>
  );
}

export default Loading;
