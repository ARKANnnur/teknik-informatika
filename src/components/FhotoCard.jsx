/* eslint-disable react/prop-types */
function FhotoCard({
  name,
  properti,
  img = "/gedungFtsNight.jpeg",
  border = true,
}) {
  return (
    <div
      className={`${properti} h-auto w-[26rem] bg-red-300 p-3 ${border && "border-shadow"}`}
    >
      <img src={img} alt="" className="h-full w-full" />
      <p>{name}</p>
    </div>
  );
}

export default FhotoCard;
