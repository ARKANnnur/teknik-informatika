/* eslint-disable react/prop-types */
function Box({
  key,
  children,
  size = "w-full md:w-1/2",
  bg = "bg-light-600",
  name,
}) {
  return (
    <div
      key={key}
      className={`h-auto ${size} ${bg} ${name} z-50 border-4 border-dark-50 p-2 text-center font-semibold shadow-lg shadow-dark-50 ring-4 ring-dark-50 ring-offset-4`}
    >
      {children}
    </div>
  );
}

export default Box;
