import { useState } from 'react';
import HotJobsCard from './../Home/HotJobsCard';
import Loader from '../../components/Loader';

const JobContainer = ({ jobs, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobPerPage = 9;
  const totalPages = Math.ceil(jobs.length / jobPerPage);
  const startIndex = (currentPage - 1) * jobPerPage;
  const currentJob = jobs.slice(startIndex, startIndex + jobPerPage);

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
      <div className='grid grid-cols-3 gap-6 w-full'>
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
