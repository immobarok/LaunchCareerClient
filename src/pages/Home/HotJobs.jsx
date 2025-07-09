import React, { useEffect, useState } from 'react'
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/jobs')
      .then(res => res.json())
      .then(data => setJobs(data))
  }, [])
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-7xl px-2 sm:px-8 md:px-16 mx-auto'>
      {
        jobs.map((job) => <HotJobsCard key={job._id} job={job} />)
      }
    </div>
  )
}

export default HotJobs