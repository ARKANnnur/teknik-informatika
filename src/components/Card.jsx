/* eslint-disable react/prop-types */
function Card({ awwards, i }) {
  const { nameCompetetion, rank, year, organizer, img } = awwards;
  return (
    <div
      className={`group relative h-80 w-64 ${i % 2 === 0 ? "-rotate-6" : "rotate-6"} border-4 bg-light-100 transition-all duration-300 hover:z-10 hover:scale-125 hover:border-4 hover:border-light-100 md:border-0`}
    >
      <img src={img} alt="" className="z-0 h-full w-full object-cover" />

      <p className="absolute left-0 top-0 w-full bg-light-100 text-center text-dark-50 transition-all duration-300 group-hover:opacity-100 group-hover:drop-shadow-2xl md:opacity-0">
        {nameCompetetion}
      </p>

      <div className="absolute bottom-0 left-0 w-full bg-light-100 px-2 py-2 text-sm text-dark-50 transition-all duration-300 group-hover:opacity-100 group-hover:drop-shadow-2xl md:opacity-0">
        <p>{rank}</p>
        <p>{year}</p>
        <p>{organizer}</p>
      </div>
    </div>
  );
}

export default Card;
