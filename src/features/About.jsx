import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

import { useLanguage } from "../contexts/GetRegionContext";
import Goals from "../components/Goals.jsx";

function About() {
  const { data } = useLanguage();
  const parent1 = useRef(null);
  const parent2 = useRef(null);
  const overlay1 = useRef(null);
  const overlay2 = useRef(null);

  useGSAP(() => {
    const elements = [
      { parent: parent1.current, overlay: overlay1.current },
      { parent: parent2.current, overlay: overlay2.current },
    ];

    elements.forEach(({ parent, overlay }) => {
      // Initial state
      gsap.set(overlay, {
        scaleY: 0,
        transformOrigin: "bottom",
      });

      const tl = gsap
        .timeline({ paused: true })
        .to(overlay, {
          scaleY: 1,
          duration: 0.5,
          ease: "power2.out",
        })
        .to(
          parent,
          {
            color: "#f1ede8",
            duration: 0.3,
          },
          "<",
        );

      const onEnter = () => tl.play();
      const onLeave = () => tl.reverse();

      // Add event listeners
      parent.addEventListener("mouseenter", onEnter);
      parent.addEventListener("mouseleave", onLeave);

      return () => {
        // Cleanup
        parent.removeEventListener("mouseenter", onEnter);
        parent.removeEventListener("mouseleave", onLeave);
      };
    });
  }, []);

  return (
    <div className="relative h-auto">
      <div
        className="top-0 min-h-dvh overflow-hidden border-b-2 border-dark-200 bg-light-100 text-dark-200"
        id="About"
      >
        <div className="flex border-y-2 border-dark-200 sm:px-10 md:px-20">
          <h1 className="w-auto grow border-x-2 border-dark-200 p-2 text-center font-roboto text-4xl font-bold">
            Tentang Teknink Informatika UIKA
          </h1>
        </div>
        <div className="z-0 flex h-full flex-col font-poppins sm:pl-10 md:flex-row md:pl-20">
          <div className="order-2 md:order-1 z-0 w-full border-x-2 border-dark-200 md:w-2/5 md:border-l-2 md:border-r-0">
            <div
              ref={parent1}
              className="relative flex h-auto flex-col space-y-5 border-b-2 border-dark-200 py-5 pl-5 md:h-1/3 md:space-y-8 md:p-0"
            >
              <div
                ref={overlay1}
                className="absolute top-0 z-10 h-full w-full grow bg-dark-50"
              />
              <h2 className="z-20 text-xl font-semibold tracking-wider md:mx-5 md:mt-5 md:text-base">
                Visi
              </h2>
              <p className="font z-20 text-lg md:mx-5">{data.visi}</p>
            </div>
            <div
              ref={parent2}
              className="relative flex h-auto flex-col space-y-5 border-b-2 border-dark-200 py-5 pl-5 md:h-2/3 md:space-y-8 md:border-none md:p-0"
            >
              <div
                ref={overlay2}
                className="absolute top-0 z-10 h-full w-full grow bg-dark-50"
              />
              <h2 className="z-20 text-xl font-semibold tracking-wider md:mx-5 md:mt-5 md:text-base">
                Misi
              </h2>
              <ul className="font z-20 list-decimal pl-2 text-lg md:mx-5">
                {data?.misi?.map((data, i) => (
                  <li key={i}>{data}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2 h-auto w-full space-y-5 border-x-2 border-dark-200 bg-light-600 p-5 md:w-3/5 md:border-r-0">
            <h2 className="text-center text-xl font-semibold tracking-wider">
              Latar Belakang
            </h2>
            {data?.about?.map((text, i) => (
              <p key={i} className="indent-8 text-base">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Goals data={data} />
    </div>
  );
}

export default About;
