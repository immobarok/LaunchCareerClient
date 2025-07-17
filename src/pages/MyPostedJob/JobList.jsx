import React, { use } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const JobList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);
  //console.log("jobs",jobs)

  return (
    <motion.div
      className="px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
        <motion.h2
          className="font-semibold text-gray-600 text-2xl sm:text-3xl md:text-4xl"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Total Job
        </motion.h2>
        <motion.p
          className="text-gray-500 text-sm"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Result ({jobs.length})
        </motion.p>
      </div>

      <hr className="text-gray-200 my-2.5 h-0.5" />

      <div className="overflow-x-hidden rounded-t rounded-b-lg shadow-sm border border-gray-200">
        <motion.table
          className="min-w-full divide-y divide-gray-200 text-sm text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <thead className="bg-lime-200 text-gray-700 font-medium">
            <tr>
              <th className="px-4 py-3">No.</th>
              <th className="px-4 py-3">Job Title</th>
              <th className="px-4 py-3">Deadline</th>
              <th className="px-4 py-3">Applications</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {jobs.map((job, index) => (
              <motion.tr
                key={job._id}
                whileHover={{ scale: 1.004 }}
                className="transition-all"
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{job.title}</td>
                <td className="px-4 py-3">{job.deadline}</td>
                <td className="px-4 py-3">{job.application_count}</td>
                <td className="px-4 py-3">
                  <Link
                    to={`/viewApplication/${job._id}`}
                    className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200"
                  >
                    View Applications
                  </Link>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </motion.div>
  );
};

export default JobList;
