import { assets } from '../../../assets/assets'
import { motion } from 'framer-motion'

const MarqueeCard = ({ marqueeData }) => {
  const { logo, companyName, location, rating, jobOpenings } = marqueeData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 0.98,
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
      }}
      className='border border-gray-200 rounded-lg p-5 bg-white shadow-sm w-[240px] cursor-pointer transition-all duration-300 hover:border-blue-100'
    >
      <div className='flex gap-3 items-center mb-3'>
        <div className='p-2 bg-gray-50 rounded-lg border border-gray-100'>
          <img
            src={logo}
            alt={companyName}
            className='w-9 h-9 object-contain'
            onError={(e) => {
              e.target.src = assets.defaultLogo;
            }}
          />
        </div>
        <div>
          <h1 className='font-semibold text-gray-800 line-clamp-1'>{companyName}</h1>
          <div className='flex items-center gap-1 mt-1'>
            <div className='flex'>
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className='text-xs text-gray-500 ml-1'>{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      <div className='flex items-center gap-2 text-sm text-gray-600 mb-4'>
        <svg className='w-4 h-4 text-gray-400' fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <p className='text-gray-600 text-sm line-clamp-1'>{location}</p>
      </div>

      <div className='text-end'>
        <p className='text-sm font-medium text-green-600'>
          {jobOpenings} Job{jobOpenings !== 1 ? 's' : ''} Available
        </p>
      </div>
    </motion.div>
  )
}

export default MarqueeCard