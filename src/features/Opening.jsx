import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Navbar from "../components/Navbar";
import YoutubeVidio from "../components/YoutubeVidio";

function Opening() {
  useGSAP(() => {
    gsap.from([".nav", ".yt"], {
      yPercent: -100,
      opacity: 0,
      duration: 1,
      stagger: 1,
    });
  }, []);

  return (
    <div className="relative flex h-dvh w-full items-center justify-center bg-light-100 py-16 sm:px-10 lg:px-20">
      <Navbar />
      <div className="yt mx-2 h-full w-full overflow-hidden rounded-xl shadow-lg shadow-dark-50">
        <YoutubeVidio />
      </div>
    </div>
  );
}

export default Opening;
