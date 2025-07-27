import { useState } from "react";
import { JobFilterContext } from "./JobFilterContext";

const JobFilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    location: '',
    jobType: [],
    category: [],
    experience: '',
    salaryRange: [0, 50000]
  });
  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      location: '',
      jobType: [],
      category: [],
      experience: '',
      salaryRange: [0, 50000]
    });
  };

  const [searchJob, setSearchJob] = useState('');
  const [sortBy, setSortBy] = useState('Most Relevant');
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 9;
  const startIndex = (currentPage - 1) * jobsPerPage;




  const filterData = {
    filters,
    updateFilter,
    setFilters,
    clearFilters,
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