import Filter from './Filter';
import JobContainer from './JobContainer';
import JobHero from './JobHero';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/UseAuth';
import UseJobFilter from '../../hooks/UseJobFilter';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { loading, setLoading } = useAuth();
  const { sortBy, searchJob } = UseJobFilter();

  const trimSearchText = searchJob.trim().toLowerCase()
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(trimSearchText) ||
    job.description.toLowerCase().includes(trimSearchText) ||
    job.company.toLowerCase().includes(trimSearchText)
  );
  const sortedJobs = [...filteredJobs];

  if (sortBy === 'Lowest Salary') {
    sortedJobs.sort((a, b) => a.salaryRange.max - b.salaryRange.max);
  } else if (sortBy === 'Highest Salary') {
    sortedJobs.sort((a, b) => b.salaryRange.max - a.salaryRange.max);
  }



  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:4000/jobs')
      .then(res => {
        setLoading(false);
        setJobs(res.data);
      })
      .catch(error => {
        console.error('Failed to fetch jobs:', error);
        setLoading(false);
      });
  }, [])

  return (
    <div className='max-w-7xl mx-auto'>
      <JobHero jobs={jobs} />
      <div className='grid grid-cols-12 gap-6 my-10'>
        <div className='col-span-3'>
          <Filter jobs={jobs} />
        </div>
        <div className='col-span-9'>
          <JobContainer filteredJobs={filteredJobs} loading={loading} jobs={sortedJobs} />
        </div>
      </div>
    </div>
  )
}

export default Jobs;