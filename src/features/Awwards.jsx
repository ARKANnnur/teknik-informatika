import { useGSAP } from "@gsap/react";
import Card from "../components/Card";
import { useRef } from "react";
import gsap from "gsap";

const awwards = [
  {
    nameCompetetion: "Gelaran Inovasi Daerah (GID)",
    rank: "Juara 1",
    year: "2020",
    organizer: "Bappedalitbang Kabupaten Bogor",
    img: "/awward5.jpg"
  },
  {
    nameCompetetion: "Gelaran Inovasi Daerah (GID)",
    rank: "Juara 2",
    year: "2020",
    organizer: "Bappedalitbang Kabupaten Bogor",
    img: "/awward1.jpg"
  },
  {
    nameCompetetion: "Gelaran Inovasi Daerah (GID)",
    rank: "Juara 3",
    year: "2020",
    organizer: "Bappedalitbang Kabupaten Bogor",
    img: "/awward3.jpg"
  },
  {
    nameCompetetion: "Pemilihan Mahasiswa Berprestasi Tk. LLDIKTI Wilayah IV",
    rank: "13 Besar",
    year: "2021",
    organizer: "LLDIKTI Wilayah IV Jawa Barat & Banten",
    img: "/awward2.jpg"
  },
  {
    nameCompetetion: "Lomba Karya Tulis",
    rank: "Juara 1",
    year: "2021",
    organizer: "Agri-Informatika JIKA",
    img: "/awward4.jpg"
  },
  {
    nameCompetetion: "Unjuk Gelar Porprov 2022",
    rank: "Medali Perunggu",
    year: "2022",
    organizer: "Porprov XIV 2022 KONI Jawa Barat",
    img: "/awward5.jpg"
  },
  {
    nameCompetetion: "Lomba Berbaris Jarak Pendek 800 Meter Mix Porprov 2022",
    rank: "Medali Perunggu",
    year: "2022",
    organizer: "Porprov XIV 2022 KONI Jawa Barat",
    img: "/awward4.jpg"
  },
  {
    nameCompetetion: "Lomba Berbaris Jarak Pendek 800 Meter Putra Porprov 2022",
    rank: "Medali Perak",
    year: "2022",
    organizer: "Porprov XIV 2022 KONI Jawa Barat",
    img: "/awward3.jpg"
  },
  {
    nameCompetetion: "Gelaran Inovasi Daerah (GID)",
    rank: "Juara 1",
    year: "2022",
    organizer: "Bappedalitbang Kabupaten Bogor",
    img: "/awward2.jpg"
  },
  {
    nameCompetetion: "IISMA 2022",
    rank: "Pertukaran Pelajar ke Negara Malaysia",
    year: "2022",
    organizer: "KEMDIKBUDRISTEKDIKTI ",
    img: "/awward1.jpg"
  },
];

function Awwards() {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;
    const scrollContainer = scrollRef.current;

    // Duplikasi items untuk efek infinite
    if (scrollContainer) {
      const duplicate = scrollContainer.cloneNode(true);
      container.appendChild(duplicate);
    }

    // Setup GSAP animation
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" },
    });

    // Calculate total width
    const totalWidth = scrollContainer.offsetWidth;

    // Animate
    tl.to(container, {
      x: -totalWidth,
      duration: 40,
      ease: "none",
    });

    // Tambahkan event untuk pause animation on hover
    const handleMouseEnter = () => tl.pause();
    const handleMouseLeave = () => tl.play();

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      tl.kill();
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="flex min-h-dvh flex-col overflow-hidden bg-light-600 py-10"
      id="Awwards"
    >
      <h1 className="h-auto text-center text-6xl font-bold text-dark-100">
        Awwards
      </h1>
      <div
        ref={containerRef}
        className="flex h-full min-w-max grow items-center justify-center"
      >
        <div ref={scrollRef} className="flex gap-20">
          {awwards.map((awward, i) => (
            <Card key={i} awwards={awward} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Awwards;
