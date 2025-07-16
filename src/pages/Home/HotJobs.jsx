import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';
import { ChevronRight } from 'lucide-react';
import useAuth from '../../hooks/UseAuth';
import Loader from '../../components/Loader';

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { loading, setLoading } = useAuth();

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:4000/jobs')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load jobs:", err);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <Loader />
    );
  }

  const slicedJobs = jobs.slice(0, 8);

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl px-2 sm:px-8 md:px-12 mx-auto'>
        {
          slicedJobs.map((job) => <HotJobsCard key={job._id} job={job} />)
        }
      </div>

      <button className='flex gap-3 btn btn-lg my-button mt-10 mx-auto'>
        Show All Jobs <ChevronRight />
      </button>
    </div>
  );
};

export default HotJobs;
