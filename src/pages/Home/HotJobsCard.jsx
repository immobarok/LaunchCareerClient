import { assets } from '../../assets/assets';
import { BriefcaseBusiness, CalendarDays, MapPin, Layers3 } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HotJobsCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    company_logo,
    requirements
  } = job;

  useEffect(() => {
      AOS.init({
        duration: 1000,
        once:true,
      });
    }, []);

  return (
    <div
      data-aos="fade-up"
      className="relative p-6 rounded-2xl shadow-sm bg-gradient-to-br from-lime-100 via-white to-[#f7f7f7] border border-lime-200 overflow-hidden transition-all duration-500 hover:scale-[1.015] hover:shadow-md"
      style={{
        backgroundSize: '300% 300%',
        animation: 'gradientPulse 10s ease infinite',
      }}
    >
      {/* Decorative blur effect */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-lime-200 rounded-full blur-3xl opacity-30 pointer-events-none z-0"></div>
      {/* Top right icon */}
      <img
        src={assets.electricIcon}
        width={18}
        className="absolute right-3 top-3"
        alt=""
      />

      {/* Header - company info */}
      <div className="flex justify-between items-start gap-4 mb-3">
        <div className="flex items-center gap-3">
          <figure className="shadow-sm border border-gray-100 rounded-md bg-lime-100 p-1">
            <img src={company_logo} alt={company} width={52} className="rounded" />
          </figure>
          <div className="flex flex-col">
            <h4 className="text-base font-semibold text-gray-800">{company}</h4>
            <div className="flex gap-1 items-center text-gray-500 text-sm">
              <MapPin size={14} className="text-gray-400" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Title and Job Details */}
      <div className="mb-3">
        <h2 className="text-lg font-medium text-gray-800 mb-1">{title}</h2>
        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <BriefcaseBusiness size={14} className="text-gray-400" />
            <span>{jobType}</span>
          </div>
          <div className="flex items-center gap-1">
            <Layers3 size={14} className="text-gray-400" />
            <span>{category}</span>
          </div>
          <div className="flex items-center gap-1">
            <CalendarDays size={14} className="text-gray-400" />
            <span>Apply by: {applicationDeadline}</span>
          </div>
        </div>
      </div>

      <div className="text-sm font-medium text-green-700 mb-3">
        Salary: {salaryRange?.min.toLocaleString()} - {salaryRange?.max.toLocaleString()} {salaryRange?.currency.toUpperCase()}
      </div>

      <div className="text-sm text-gray-700">
        <p className="line-clamp-2 mb-2">{description}</p>
        <div className='space-x-2 space-y-1'>
          {
            requirements.map((req, idx) => (
              <p className="badge badge-soft bg-lime-100 border-none text-lime-600" key={idx}>{req}</p>
            ))
          }
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-start mt-3"
      >
        <Link to={`jobs/${_id}`} className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium text-lime-100 cursor-pointer transition duration-300 ease-out border-1 border-lime-300 rounded-md shadow-md group">
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-lime-400 group-hover:translate-x-0 ease">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-lime-500 transition-all duration-300 transform group-hover:translate-x-full ease">
            View Details
          </span>
          <span className="relative invisible">Apply Now</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default HotJobsCard;
