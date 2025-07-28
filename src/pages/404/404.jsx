import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 to-lime-50 flex flex-col items-center justify-center p-4 text-lime-500">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {/* Animated 404 text */}
        <motion.div
          animate={{
            rotate: [0, 5, -5, 5, -5, 0],
            y: [0, -10, 10, -10, 10, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <h1 className="text-9xl font-bold mb-4">404</h1>
        </motion.div>

        <h2 className="text-3xl font-semibold mb-6">Oops! Page Not Found</h2>

        <p className="text-gray-400 max-w-md mb-8">
          The page you're looking for doesn't exist or has been moved.
          Maybe try one of these instead:
        </p>

        {/* Floating buttons */}
        <div className="flex gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#84cc16" }}
            whileTap={{ scale: 0.95 }}
            className="bg-lime-500 text-gray-900 font-bold py-3 px-8 rounded-md flex gap-2 items-center cursor-pointer"
          >
            Go Home <Home />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, borderColor: "#84cc16" }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-lime-500 text-lime-500 font-bold py-3 px-8 rounded-md flex gap-2 items-center cursor-pointer"
          >
            Back <ArrowLeft />
          </motion.button>
        </div>
        <motion.div
          className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-lime-500 opacity-20"
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full bg-lime-500 opacity-10"
          animate={{
            y: [0, -30, 0],
            x: [0, -15, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        <motion.div
          className="absolute top-2/3 right-1/3 w-6 h-6 rounded-full bg-lime-500 opacity-30"
          animate={{
            y: [0, -15, 0],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>

      {/* Footer with animated text */}
      <motion.div
        className="absolute bottom-8 text-gray-500 text-sm"
        animate={{
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        Not all who wander are lost... but you might be
      </motion.div>
    </div>
  );
};

export default NotFound;