import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="fixed bg-black top-0 w-full z-30 clearNav md:bg-opacity-95 transition duration-300 ease-in-out">
        <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between py-4 md:px-4 w-full">
            <h1 className="flex text-4xl Avenir tracking-tighter text-white md:text-4xl lg:text-3xl">
              <p className = "font-avenir text-xl">Headband AI</p>
            </h1>
          </div>
        </div>
      </div>
      <section className="max-w-full bg-black text-gray-600 body-font">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center text-center z-10 relative">

        </div>
      </section>
    </div>
  )
}
