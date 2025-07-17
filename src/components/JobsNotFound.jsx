import Lottie from 'lottie-react';
import animationData from '../../public/No-Data.json';
const JobsNotFound = () => {
  return(
    <div className='w-78 h-60'>
      <div className="w-64 h-64">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  )
};

export default JobsNotFound;