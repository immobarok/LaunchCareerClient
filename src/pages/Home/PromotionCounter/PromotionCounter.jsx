import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { useRef } from 'react';

const PromotionCounter = () => {
  const clientCounter = [
    {
      "count": 9,
      "suffix": "K+",
      "title": "Completed Cases",
      "description": "We always provide people a complete solution upon focused of any business"
    },
    {
      "count": 10,
      "suffix": "+",
      "title": "Our Office",
      "description": "We always provide people a complete solution upon focused of any business"
    },
    {
      "count": 33,
      "suffix": "K+",
      "title": "Skilled People",
      "description": "We always provide people a complete solution upon focused of any business"
    },
    {
      "count": 10,
      "suffix": "K+",
      "title": "Happy Clients",
      "description": "We always provide people a complete solution upon focused of any business"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className='max-w-6xl mx-auto my-10 sm:my-20'
    >
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center text-center px-4'>
        {clientCounter.map((counter, idx) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, margin: '-100px' });

          return (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
              ref={ref}
              className="space-y-4 p-6 transition-shadow"
            >
              <motion.h1
                className="text-4xl sm:text-5xl font-bold text-lime-500"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 * idx }}
              >
                {isInView && (
                  <CountUp
                    start={0}
                    end={counter.count}
                    duration={2.5}
                    separator=","
                  />
                )}
                {counter.suffix}
              </motion.h1>

              <motion.h2
                className="text-xl sm:text-2xl font-medium text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + (0.1 * idx) }}
              >
                {counter.title}
              </motion.h2>

              <motion.p
                className="text-gray-500 text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + (0.1 * idx) }}
              >
                {counter.description}
              </motion.p>
            </motion.div>
          );
        })}

      </div>
    </motion.div>
  )
}

export default PromotionCounter;