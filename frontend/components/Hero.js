export default function Hero(){
  return (
    /*
    <section className="relative w-full h-full py-40 min-h-screen">
      <div className="absolute top-0 w-full h-full bg-custom"></div>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center">
          <div className="relative h-100 flex flex-wrap content-center">
            <div className="text-white text-3xl">
              <h1>Welcome to the SpaceX Stalking Website</h1>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    */

    <div className="relative overflow-hidden bg-custom min-h-screen text-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"></div>
        <main className="mt-48">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-5xl">Welcome to the SpaceX <br/>stalking website</h1>
            <p className="mt-3 text-xl font-light mb-3">
              See all the upcoming SpaceX launches and stay tuned for updates!
            </p>
            <button className="border border-white px-5 py-2 rounded-lg">Learn more</button>
          </div>
        </main>
      </div>
    </div>
  );
}