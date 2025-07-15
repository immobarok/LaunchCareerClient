import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const NewsLetter = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, [])
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 my-8 sm:my-16 md:my-20">
      <div
        className="relative isolate overflow-hidden bg-white px-6 py-24  rounded-2xl sm:rounded-3xl sm:px-24 xl:py-32">

        <h2 data-aos="fade-up" className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">Keep Updated
        </h2>

        <p data-aos="fade-up"
          data-aos-delay="100" className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-500">
          Keep pace with SecureCloud
          advancements! Join our mailing list for selective, noteworthy updates.
        </p>

        <form data-aos="zoom-in"
          data-aos-delay="200" className="mx-auto mt-10 flex max-w-md gap-x-4">

          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autoComplete="email" required="" className="min-w-0 flex-auto rounded-md border-1 border-lime-400 bg-lime-600/5 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-lime-900/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" placeholder="Enter your email" />

          <button type="submit" className="flex-none rounded-md btn my-button focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Notify me</button>
        </form>

        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-150 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#lime-gradient)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient
              id="lime-gradient"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(512 512) rotate(90) scale(512)"
            >
              <stop stopColor="#a3e635" />
              <stop offset="1" stopColor="#a3e635" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default NewsLetter