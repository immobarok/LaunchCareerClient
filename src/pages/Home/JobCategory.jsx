import React from 'react';
import { motion } from 'framer-motion';
import { category } from '../../assets/assets';

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
    <div className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Jobs Of the Day</h1>
        <p className="mt-2 text-gray-600">Find the job that's perfect for you</p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3"
      >
        {category.map((cat, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ scale: 1.03 }}
            className="p-3 rounded-lg border border-gray-200 hover:border-lime-300 transition-colors cursor-pointer flex-shrink-0"
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