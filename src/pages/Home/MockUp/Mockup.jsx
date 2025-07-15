import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../../../assets/assets';
import moc_bg from '../../../assets/bg-grad.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Mockup = () => {
   useEffect(() => {
          AOS.init({
            duration: 1000,
            once:true,
          });
        }, []);
  return (
    <div
      className="w-full py-16 bg-none lg:bg-cover lg:bg-center"
      style={{
        backgroundImage: `url(${moc_bg})`,
      }}
    >
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-12 px-6 sm:px-10 lg:px-20">
        {/* Content Section */}
        <div
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 data-aos="fade-up-right" className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-lime-950 to-lime-500 bg-clip-text text-transparent mb-6">
            Download Our Mobile App
          </h1>
          <p data-aos="fade-up-left" className="text-gray-500 mb-8 text-lg leading-relaxed">
            Experience seamless service with our feature-rich mobile application available on both iOS and Android platforms.
          </p>

          {/* Download Buttons */}
          <div data-aos='fade-left' className="flex justify-center md:justify-start gap-4">
            <a href="#" className="btn btn-lg btn-neutral text-white px-4 py-2 rounded-xl flex items-center gap-2  transition">
              <img src={assets.appleWhite} alt="Apple" className="w-5 h-5" />
              App Store
            </a>
            <a href="#" className="btn btn-lg btn-neutral text-white px-4 py-2 rounded-xl flex items-center gap-2 transition">
              <img src={assets.playStore} alt="Playstore" className="w-5 h-5" />
              Google Play
            </a>
          </div>
        </div>

        {/* Mobile Mockup Image */}
        <div
          data-aos='zoom-in'
          className="relative w-full md:w-1/2 flex justify-center"
        >
          <img
            src={assets.mobileMoc}
            alt="Mobile App"
            className="w-60 sm:w-72 md:w-80 lg:w-96 h-auto rotate-6 drop-shadow-2xl hover:rotate-2 duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Mockup;
