import React from 'react'
import { assets } from "../../assets/assets"
import { motion } from "framer-motion"
import banner from '../../assets/banner.png'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const logos = [
    { src: assets.asus, alt: 'Asus' },
    { src: assets.acer, alt: 'Acer' },
    { src: assets.kia, alt: 'Kia' },
    { src: assets.sony, alt: 'Sony' },
  ];

  const containerVariant = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='max-w-6xl mx-auto px-8 sm:px-20 md:px-16 lg:px-4 py-20 sm:py-28'>
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="w-full lg:w-1/2 flex flex-col"
            variants={itemVariants}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
              variants={itemVariants}
            >
              Find The Career You <br /> Deserve
            </motion.h1>

            <motion.p
              className="text-gray-600 mt-4 text-sm sm:text-base"
              variants={itemVariants}
            >
              Empowering professionals and businesses — explore top job listings or post new openings. Your next opportunity or perfect hire is just a click away.
            </motion.p>

            <motion.div
              className="flex flex-row gap-3 items-center my-6"
              variants={itemVariants}
            >
              <motion.button
                className="my-button border border-lime-300 hover:bg-lime-600 text-white px-6 sm:px-8 rounded-full py-2 sm:py-3 transition-colors duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>

              <motion.button
                className="border border-lime-400 text-lime-600 hover:bg-lime-50 px-6 sm:px-8 py-2 sm:py-3 rounded-full cursor-pointer transition-colors duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
            <div>
              <h1 className="text-base font-medium text-gray-500 mt-3">Truested By</h1>
              <motion.div
                className="flex flex-wrap justify-start gap-3 items-start md:-mt-5 mt-0"
                variants={containerVariant}
                initial="hidden"
                animate="show"
              >
                {logos.map((logo, index) => (
                  <motion.img
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    variants={itemVariant}
                    className=" w-16 h-16 sm:w-20 sm:h-20md:w-28 md:h-28 object-contain grayscale hover:grayscale-0 transition duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.figure
            className="w-full lg:w-1/2 flex justify-center"
            variants={imageVariants}
          >
            <motion.img
              className="object-contain w-full max-w-md lg:max-w-xl pb-20 "
              src={assets.hero_icon}
              alt="Career opportunities"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </motion.figure>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero