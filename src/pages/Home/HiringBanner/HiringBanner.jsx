import { motion } from "framer-motion";
import { assets } from "../../../assets/assets";

const HiringBanner = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="h-auto md:h-48 w-full -mt-20 max-w-5xl mx-auto rounded-xl bg-lime-50/5 backdrop-blur-md border border-white/80 shadow-md p-6 my-8"
    >
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
        {/* Left Section */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 md:gap-6 items-center sm:items-start"
        >
          <motion.img
            src={assets.jobApply}
            className="w-52 md:w-42"
            alt="Job application"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
          <div>
            <motion.h1
              className="text-2xl  font-bold uppercase text-gray-500 text-start"
              whileHover={{ scale: 1.02 }}
            >
              We are<br />
              <motion.span
                className="text-4xl sm:text-5xl md:text-6xl text-gray-900 block"
                whileHover={{ scale: 1.03 }}
              >
                Hiring
              </motion.span>
            </motion.h1>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 md:gap-6"
        >
          <motion.p
            className="text-center md:text-end text-gray-500 font-medium leading-6 text-xl sm:text-base"
            whileHover={{ scale: 1.02 }}
          >
            Let's <span className="text-gray-950">Work</span> Together<br />
            & <span className="text-gray-950">Explore</span> <br />
            Opportunities
          </motion.p>

          <motion.button
            className="btn my-button px-6 py-3 text-white rounded-lg font-medium hover:bg-lime-500 transition-colors"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(132, 204, 22, 1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now
          </motion.button>

          <motion.img
            src={assets.apply}
            className="w-32 md:w-42 hidden sm:block"
            alt="Apply now"
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ type: "spring" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HiringBanner;