import FhotoCard from "../components/FhotoCard";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const gallery = [
  "/gedung1.jpeg",
  "/gedung2.jpeg",
  "gedung3.jpeg",
  "/gedung1.jpeg",
  "/gedung2.jpeg",
  "gedung3.jpeg",
  "/gedung1.jpeg",
  "/gedung2.jpeg",
  "gedung3.jpeg",
];

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
    <div className="Gallery min-h-dvh bg-light-500 py-10" id="Gallery">
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
            {gallery.map((img, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="h-10 w-[2px] bg-dark-100"></div>
                <FhotoCard img={img} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
