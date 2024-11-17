function Event() {
  return (
    <div
      className="flex min-h-dvh flex-col border-y-4 border-dark-200 bg-light-100"
      id="Event"
    >
      <h1 className="mb-2 text-center text-6xl font-bold text-dark-100">
        EVENT
      </h1>
      <div className="grid h-full grow grid-cols-1 border-y-4 border-dark-50 bg-slate-800 sm:grid-cols-2 lg:grid-cols-4">
        <div className="h-72 w-full border border-dark-50 bg-light-400 sm:h-full">
          <img src="/event4.jpg" alt="event4" className="h-full w-full" />
        </div>
        <div className="h-72 w-full border border-dark-50 bg-light-400 sm:h-full">
          <img src="/event3.jpg" alt="event3" className="h-full w-full" />
        </div>
        <div className="h-72 w-full border border-dark-50 bg-light-400 sm:h-full">
          <img src="/event2.jpg" alt="event2" className="h-full w-full" />
        </div>
        <div className="h-72 w-full border border-dark-50 bg-light-400 sm:h-full">
          <img src="/event1.jpg" alt="event1" className="h-full w-full" />
        </div>
      </div>
      <h2 className="text-wrap text-center text-xl font-bold tracking-widest text-dark-100 md:text-6xl">
        GEBYAR IT HIMATEKINFO UIKA
      </h2>
    </div>
  );
}

export default Event;
