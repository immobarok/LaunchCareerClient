import Filter from './Filter';
import JobContainer from './JobContainer';
import JobHero from './JobHero';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/UseAuth';
import UseJobFilter from '../../hooks/UseJobFilter';
import NewsLetter from '../Home/NewsLetter/NewsLetter';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { loading, setLoading } = useAuth();
  const { sortBy, searchJob,filters } = UseJobFilter();

  const trimSearchText = searchJob.trim().toLowerCase()
  const filteredJobs = jobs.filter((job) => {
    const titleMatch = job.title.toLowerCase().includes(trimSearchText);
    const descMatch = job.description.toLowerCase().includes(trimSearchText);
    const companyMatch = job.company.toLowerCase().includes(trimSearchText);

    const locationMatch = !filters.location || job.location === filters.location;
    const experienceMatch = !filters.experience || job.experience === filters.experience;
    const salaryMatch = job.salaryRange.max <= filters.salaryRange[1];

    const jobTypeMatch =
      filters.jobType.length === 0 ||
      filters.jobType.some(type => job.jobType.includes(type));

    return (
      (titleMatch || descMatch || companyMatch) &&
      locationMatch &&
      experienceMatch &&
      salaryMatch &&
      jobTypeMatch
    );
  });

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
          <Filter />
        </div>
        <div className='col-span-9'>
          <JobContainer filteredJobs={filteredJobs} loading={loading} jobs={sortedJobs} />
        </div>
      </div>
      <NewsLetter />
    </div>
  )
}

export default Jobs;