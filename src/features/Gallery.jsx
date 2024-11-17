import FhotoCard from "../components/FhotoCard";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Gallery() {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {

    const container = containerRef.current;
    const cards = cardsRef.current;

    gsap.to(cards, {
      x: () => -(cards.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: {
        //   startColor: "yellow",
        //   endColor: "yellow",
        // },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="Gallery bg-light-500 min-h-dvh py-10" id="Gallery">
      <div className="relative mt-10 h-[300dvh]" ref={containerRef}>
        <h1 className="sticky top-10 -translate-y-10 text-center text-6xl font-bold text-dark-100">
          GALLERY
        </h1>
        <div className="sticky top-1/4 overflow-hidden">
          <div className="before:content-[' '] relative h-1 w-full bg-dark-100 before:absolute before:mt-5 before:h-[2px] before:w-full before:bg-dark-200/40"></div>
          <div
            ref={cardsRef}
            className="flex min-w-max items-center gap-16 px-5"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="h-10 w-[2px] bg-dark-100"></div>
                <FhotoCard />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
