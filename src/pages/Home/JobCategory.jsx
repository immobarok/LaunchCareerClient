import React from 'react';
import { motion } from 'framer-motion';
import { assets, category } from '../../assets/assets';

const JobCategory = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { y: 10, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div className="pt-8 pb-16 px-4 sm:px-6 max-w-6xl mx-auto relative">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Jobs Of the Day
        </h1>
        <p className="mt-2 text-gray-600">Find the job that's perfect for you</p>
      </div>

      {/* Scroll Direction Icon for Mobile */}
      <motion.img
        src={assets.swapLeft}
        alt="scroll direction"
        className="absolute top-[11rem] right-3 w-6 h-6 z-10 sm:hidden pointer-events-none"
        initial={{ x: 0, opacity: 0.5 }}
        animate={{ x: -8, opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex justify-center flex-nowrap sm:flex-wrap scrollbar-hide gap-3 overflow-x-auto pl-6 sm:pl-0 md:overflow-hidden"
      >
        {category.map((cat, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ scale: 1.01 }}
            className="p-3 rounded-lg border border-gray-200 hover:border-lime-300 transition-colors cursor-pointer flex-shrink-0 bg-white shadow-sm"
          >
            <div className="flex items-center gap-3">
              <img
                src={cat.icon}
                alt={cat.title}
                className="w-8 h-8 object-contain"
              />
              <div className="text-start">
                <h3 className="text-sm font-medium text-gray-800">{cat.title}</h3>
                <p className="text-xs text-gray-500">{cat.subtitle}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default JobCategory;
