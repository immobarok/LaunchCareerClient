import { useState } from "react";
import { JobFilterContext } from "./JobFilterContext";

const JobFilterProvider = ({ children }) => {
  const [searchJob, setSearchJob] = useState('');
  const [sortBy, setSortBy] = useState('Most Relevant');

  const filterData = {
    searchJob,
    setSearchJob,
    sortBy,
    setSortBy
  }
  return (
    <JobFilterContext value={filterData}>
      {children}
    </JobFilterContext>
  )
}

export default JobFilterProvider;