import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, CalendarDays, MapPin, Layers3, Mail, User, DollarSign, Clock } from 'lucide-react';

const JobDetails = () => {
  const {
    _id,
    title,
    company,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    requirements = [],
    responsibilities = [],
    hr_email,
    hr_name,
    company_logo
  } = useLoaderData();
  

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 my-10 sm:my-16 md:my-26"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {/* Header Section */}
      <motion.div
        className="flex flex-col md:flex-row gap-6 items-start mb-8"
        variants={item}
      >
        <motion.div
          className="w-24 h-24 rounded-lg bg-white border border-gray-200 p-2 shadow-sm"
          whileHover={{ scale: 1.05 }}
        >
          <img src={company_logo} alt={company} className="w-full h-full object-contain" />
        </motion.div>
        <div>
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
            variants={item}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700 mb-4"
            variants={item}
          >
            {company} • {location}
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3"
            variants={container}
          >
            <motion.span
              className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
              variants={item}
            >
              <BriefcaseBusiness size={14} />
              {jobType}
            </motion.span>
            <motion.span
              className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm"
              variants={item}
            >
              <Layers3 size={14} />
              {category}
            </motion.span>
            <motion.span
              className="flex items-center gap-1 px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
              variants={item}
            >
              <DollarSign size={14} />
              Salary: {salaryRange?.min.toLocaleString()} - {salaryRange?.max.toLocaleString()} {salaryRange?.currency.toUpperCase()}
            </motion.span>
            <motion.span
              className="flex items-center gap-1 px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm"
              variants={item}
            >
              <Clock size={14} />
              Apply by {new Date(applicationDeadline).toLocaleDateString()}
            </motion.span>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Job Description */}
          <motion.section
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            variants={item}
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </motion.section>

          {/* Responsibilities */}
          <motion.section
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            variants={item}
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Responsibilities</h2>
            <ul className="space-y-3">
              {responsibilities.map((responsibility, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2 text-gray-700"
                  variants={item}
                  whileHover={{ x: 5 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2"></span>
                  {responsibility}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Requirements */}
          <motion.section
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            variants={item}
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
            <div className="flex flex-wrap gap-2">
              {requirements.map((req, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-full text-sm border border-gray-200"
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                >
                  {req}
                </motion.span>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Apply Card */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-6"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Apply for this position</h3>
            <Link to={`/jobApply/${_id}`}>
              <motion.button
                className="w-full py-3 px-4 bg-lime-500 hover:bg-lime-600 text-white font-medium rounded-lg transition-colors mb-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply Now
              </motion.button>
            </Link>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <CalendarDays size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Application Deadline</p>
                  <p className="font-medium">{new Date(applicationDeadline).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-50 rounded-lg">
                  <User size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">HR Contact</p>
                  <p className="font-medium">{hr_name}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <Mail size={18} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href={`mailto:${hr_email}`} className="font-medium text-blue-600 hover:underline">
                    {hr_email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobDetails;