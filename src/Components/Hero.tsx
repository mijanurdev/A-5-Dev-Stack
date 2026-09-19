
const Hero = () => {
  return (
    <section
      id="home"
      className="site-container grid min-h-[480px] items-center gap-8 py-16 md:grid-cols-2 md:py-24"
    >

      <div>

        <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">

          Build Your Ideal

          <br />

          <span className="text-brand-gradient">
            Development Stack
          </span>

        </h1>

       <p className="mt-5 max-w-[460px] font-sans text-sm leading-7 text-copy">
          Explore frontend, backend, database, and tooling
          options, compare them side by side, and put together
          the stack that fits your next project.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">

          <a
            href="#technologies"
            className="btn btn-sm brand-gradient rounded-md border-none px-5 text-xs text-white"
          >
            Explore Technologies
          </a>

          <a
            href="#about"
            className="btn btn-sm rounded-md border border-line bg-white px-7 text-xs font-medium text-copy"
          >
            Learn More
          </a>

        </div>

      </div>

      <div className="flex justify-center md:justify-end">

        <img
          src="/assets/banner-stack.png"
          alt="Development stack illustration"
          className="w-full max-w-[390px] object-contain"
        />

      </div>

    </section>
  )
}

export default Hero