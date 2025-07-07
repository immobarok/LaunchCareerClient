import { assets } from "../assets/assets"
import { motion } from "framer-motion"

const Home = () => {
  // Animation variants
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

  return (
    <div className="bg-gradient-to-l from-lime-50 to-lime-200/60">
      <div className='max-w-6xl mx-auto px-4 py-8 sm:py-12'>
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
                className="bg-lime-500 border border-lime-400 hover:bg-lime-600 text-white px-6 sm:px-8 rounded-full py-2 sm:py-3 transition-colors duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Find a Job
              </motion.button>

              <motion.button
                className="border border-lime-500 text-lime-600 hover:bg-lime-50 px-6 sm:px-8 py-2 sm:py-3 rounded-full cursor-pointer transition-colors duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Post a Job
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.figure
            className="w-full lg:w-1/2 flex justify-center"
            variants={imageVariants}
          >
            <motion.img
              className="object-contain w-full max-w-md lg:max-w-xl"
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

export default Home