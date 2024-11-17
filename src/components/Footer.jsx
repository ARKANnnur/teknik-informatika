import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaTiktok, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-light-200 pb-2 pt-5 font-semibold text-dark-50">
      <div className="flex flex-col justify-between px-2 md:flex-row">
        <ul>
          <li className="nav-li">
            <a
              href="https://www.google.com/maps/place/Universitas+Ibn+Khaldun+Bogor/@-6.5611463,106.7924118,15z/data=!4m6!3m5!1s0x2e69c46c9a3721e9:0x270b284c8a1f7e49!8m2!3d-6.5611463!4d106.7924118!16s%2Fg%2F120p9ypq?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
              className="flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLocationDot className="translate-y-[1px]" />
              Jl. Sholeh Iskandar, Kedungbadak, Tanah Sereal, Kota Bogor, Jawa
              Barat
            </a>
          </li>
          <li className="nav-li">
            <a
              href="https://wa.me/62816731857"
              className="flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFillTelephoneFill className="translate-y-[1px]" />
              0816-731-857
            </a>
          </li>
          <li className="nav-li">
            <a
              href="https://mail.google.com/mail/?view=cm&to=ft@uika-bogor.ac.id"
              className="flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail className="translate-y-[1px]" />
              ft@uika-bogor.ac.id
            </a>
          </li>
          <li className="flex flex-col md:flex-row md:gap-2">
            <li className="nav-li">
              <a
                href="https://wa.me/628159118035"
                className="flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp className="translate-y-[1px]" />
                Hersanto
              </a>
            </li>
            <li className="nav-li">
              <a
                href="https://www.instagram.com/informatika_uika/"
                className="flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram className="translate-y-[1px]" />
                Teknik Informatika Uika
              </a>
            </li>
            <li className="nav-li">
              <a
                href="https://www.instagram.com/himatekinfouikabogor/"
                className="flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram className="translate-y-[1px]" />
                Himpunan Mahasiswa TI UIKA
              </a>
            </li>
          </li>
        </ul>
        <ul>
          <li className="nav-li">
            <a
              href="https://www.youtube.com/@Media_TI"
              className="flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="translate-y-[1px]" />
              Media TI
            </a>
          </li>
          <li className="flex items-center gap-2">
            <a
              href="https://www.tiktok.com/@himatekinfo_uika"
              className="flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="translate-y-[1px]" />
              Himpunan Mahasiswa TI Uika
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-5 flex justify-center border-t-2 border-dark-200">
        <p className="font-bold">Copyright by @Arkannur | 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
