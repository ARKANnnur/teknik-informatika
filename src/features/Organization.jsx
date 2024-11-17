import { useState } from "react";

const staffData = [
  {
    role: "Ketua Program Studi",
    name: "Fitrah Satrya Fajar Kusumah, S.Kom., M.Kom",
    image: "/ketum.jpg",
  },
  {
    role: "Gugus Kendali Mutu",
    name: "Ade Hendri Hendrawan, S.Kom., M.Kom.",
    image: "/gugus.jpg",
  },
  {
    role: "Sekretaris Program Studi",
    name: "Hersanto Fajri, S. Ds.,M.M.D.",
    image: "/sekre.jpg",
  },
  {
    role: "Kepala Laboratorium Software Engineering",
    name: "Safaruddin Hidayat Al Ikhsan, S. Kom., M.Kom",
    image: "/kelabsof.jpg",
  },
  {
    role: "Kepala Laboratorium GIT",
    name: "Dr. Erwin Hermawan, S.Si., M. Sc. IT.",
    image: "/kelabgit.jpg",
  },
  {
    role: "Kepala Laboratorium CSN",
    name: "Ritzkal, S.Kom., M.Kom",
    image: "/kelabcsn.jpg",
  },
  {
    role: "Kepala Laboratorium KERIS",
    name: "Dr. Puspa Eosina, S.Si., M.Kom",
    image: "/kelabkris.jpg",
  },
  {
    role: "Kepala Laboratorium Multimedia",
    name: "Berlina Wulandari, S.T., M.Kom",
    image: "/kelabmedia.jpg",
  },
  {
    role: "Staff Bagian Keuangan",
    name: "Yeni Sugiarti, S.E.",
    image: "/tu1.jpg",
  },
  { role: "Staff Bagian Akademik", name: "Abdul Haris", image: "/tu2.jpg" },
  {
    role: "Staff Bagian Administrasi",
    name: "Pebriyanto",
    image: "/ketum.jpg",
  },
  {
    role: "Laboran Program Studi",
    name: "Siti Patimah, S.T.",
    image: "/laboran1.jpg",
  },
  { role: "Laboran Program Studi", name: "Guido Tamara", image: "/ketum.jpg" },
];

function Organization() {
  const [pickImg, setPickImg] = useState("/ketum.jpg");

  return (
    <div
      className="Gallery flex min-h-dvh flex-col bg-light-100"
      id="Organization"
    >
      <div className="border-y-2 border-dark-200 px-10 md:px-20">
        <h1 className="border-x-2 border-dark-200 py-2 text-center text-4xl font-bold text-dark-100">
          Struktur Organisasi
        </h1>
      </div>
      <div className="flex grow flex-col md:flex-row">
        <div className="min-h-full w-full grow overflow-hidden bg-dark-300 md:w-2/5">
          <img
            src={pickImg}
            alt="ketum"
            className="h-full w-full border-r-2 border-dark-200 transition-all"
          />
        </div>
        <div className="min-h-full w-full grow md:w-3/5">
          {staffData.map((staff, index) => (
            <div
              key={index}
              className="dosen flex cursor-pointer flex-wrap items-center justify-center border-b-2 border-b-dark-200 p-2 text-lg hover:border-b-light-100 hover:bg-dark-200 hover:text-light-100 md:flex-nowrap"
              onClick={() => setPickImg(staff.image)}
            >
              <p className="w-full font-semibold md:w-1/2">{staff.role}</p>
              <p className="w-full md:w-1/2">{staff.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Organization;
