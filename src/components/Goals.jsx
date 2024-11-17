/* eslint-disable react/prop-types */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Box from "./Box";
import BgIcon from "./BgIcon";

function Goals({ data }) {
  const firstTarget = data?.target?.slice(0, 7);
  const secondTarget = data?.target?.slice(7);

  useGSAP(() => {
    gsap.set([".goal", ".target1", ".target2"], {
      opacity: 0,
      yPercent: 100,
    });

    gsap.to(".goal", {
      opacity: 1,
      yPercent: 0,
      delay: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: ".goal-container",
        start: "top top",
        end: "10% bottom",
        invalidateOnRefresh: true,
        markers: {
          startColor: "yellow",
          endColor: "yellow",
        },
      },
    });
    gsap.to(".target1", {
      opacity: 1,
      yPercent: 0,
      delay: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: ".target-container",
        start: "top top",
        end: "top bottom",
        invalidateOnRefresh: true,
        markers: {
          startColor: "yellow",
          endColor: "yellow",
        },
      },
    });
    gsap.to(".target2", {
      opacity: 1,
      yPercent: 0,
      delay: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: ".target-container",
        start: "top top",
        end: "top bottom",
        invalidateOnRefresh: true,
        markers: {
          startColor: "yellow",
          endColor: "yellow",
        },
      },
    });
  }, []);

  return (
    <div className="goal-container overflow-hidden relative min-h-[300dvh] bg-light-400 py-10">
      <h2 className="text-shadow z-10 text-center text-6xl font-bold text-dark-200">
        TUJUAN
      </h2>
      <div className="my-10 flex h-auto w-full flex-col items-center justify-center gap-10 px-5 md:p-0">
        {data?.goals?.map((goal, i) => (
          <Box key={i} name="goal">
            {goal}
          </Box>
        ))}
      </div>
      <h2 className="target-container text-shadow my-10 text-center text-6xl font-bold text-dark-200">
        SASARAN
      </h2>
      <div className="flex w-full z-40 flex-col gap-10 px-5 md:flex-row md:px-10">
        <div className="w-full z-40 space-y-10 md:w-1/2">
          {firstTarget?.map((target, i) => (
            <Box key={i} size="w-full" bg="bg-light-100" name="target1">
              {target}
            </Box>
          ))}
        </div>
        <div className="w-full z-40 space-y-10 md:w-1/2">
          {secondTarget?.map((target, i) => (
            <Box
              key={i}
              size="w-full"
              bg="bg-red-600 text-white"
              name="target2"
            >
              {target}
            </Box>
          ))}
        </div>
      </div>

      <BgIcon />
    </div>
  );
}

export default Goals;
