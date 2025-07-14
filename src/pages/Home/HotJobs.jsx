import React, { useEffect, useState } from 'react'
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 8;

  useEffect(() => {
    fetch('http://localhost:4000/jobs')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
      });
  }, []);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;//0->1->2
  const currentJobs = jobs.slice(startIndex, startIndex + jobsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  }

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl px-2 sm:px-8 md:px-16 mx-auto'>
        {
          currentJobs.map((job) => <HotJobsCard key={job._id} job={job} />)
        }
      </div>

      {/* Pagination buttons */}
      <div className="join flex justify-center items-center my-8 gap-2">
        <button
          className="join-item btn"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          «
        </button>

        {/* Dynamic page numbers */}
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
    </div>
  );
}

export default HotJobs;
