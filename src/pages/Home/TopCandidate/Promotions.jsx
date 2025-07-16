import { ChevronRight, Search } from "lucide-react"
import { assets } from "../../../assets/assets"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Promotions = () => {

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once:false,
    });
  }, []);

  return (
    <div className="my-10 flex flex-col sm:flex-row justify-between px-4 sm:px-8 md:px-12 lg:px-16">
      <div style={{ height: '60vh' }}></div>
      <img data-aos="zoom-in" src={assets.promotion} alt="" className="w-full sm:w-1/2" />
      <section data-aos="zoom-in-left" className="flex flex-col gap-3 w-full sm:w-1/2 px-4 sm:px-8 md:px-12 py-8">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-300">
          Millions Of Jobs.
        </h3>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Find The One That’s<br></br><span className="text-lime-500">Right</span> For You
        </h1>
        <p className="mt-4 sm:mt-6">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there.</p>
        <div className="flex gap-4 mt-6">
          <button className="btn my-button btn-lg flex items-center">Search Job <Search size={20} strokeWidth={1.25} /> </button>
          <button className="btn btn-outline btn-lg border-lime-400 hover:bg-lime-100 transition-colors duration-300 flex items-center">Learn More <ChevronRight size={20} strokeWidth={1.25} /> </button>
        </div>
      </section>
      <div style={{ height: '60vh' }}></div>
    </div>
  )
}

export default Promotions