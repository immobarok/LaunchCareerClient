import { useState } from 'react';
import HotJobsCard from './../Home/HotJobsCard';
import Loader from '../../components/Loader';
import useJobFilter from '../../hooks/UseJobFilter';
import JobsNotFound from '../../components/JobsNotFound';

const JobContainer = ({ jobs, loading, filteredJobs }) => {
  const { setCurrentPage, currentPage, startIndex, jobsPerPage } = useJobFilter();

  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const currentJob = jobs.slice(startIndex, startIndex + jobsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <>
      {
        filteredJobs.length === 0 &&
        <div className="flex justify-center items-center">
          <JobsNotFound />
        </div>
      }
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
        {
          currentJob.map((job) => (
            <HotJobsCard key={job._id} job={job} />
          ))
        }
      </div>

      <div className="join flex justify-center items-center my-8 gap-2">
        <button
          className="join-item btn"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          «
        </button>
        {
          [...Array(totalPages).keys()].map((_, idx) => (
            <button
              key={idx + 1}
              onClick={() => handlePageChange(idx + 1)}
              className={`join-item btn ${currentPage === idx + 1 ? 'bg-lime-500 text-white' : ''}`}
            >
              {idx + 1}
            </button>
          ))
        }
        <button
          className="join-item btn"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          »
        </button>
      </div>
    </>
  );
};

export default JobContainer;
