import { useState } from "react";
import { JobFilterContext } from "./JobFilterContext";

const JobFilterProvider = ({ children }) => {
  const [searchJob, setSearchJob] = useState('');
  const [sortBy, setSortBy] = useState('Most Relevant');
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 9;
  const startIndex = (currentPage - 1) * jobsPerPage;
 

  const filterData = {
    searchJob,
    setSearchJob,
    sortBy,
    setSortBy,
    currentPage,
    setCurrentPage,
    jobsPerPage,
    startIndex
  }
  return (
    <JobFilterContext value={filterData}>
      {children}
    </JobFilterContext>
  )
}

export default JobFilterProvider;