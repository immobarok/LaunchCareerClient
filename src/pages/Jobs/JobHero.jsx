import { useState } from 'react';
import { Search, Filter, ArrowUpDown } from 'lucide-react';
import { assets } from '../../assets/assets';
import useJobFilter from '../../hooks/UseJobFilter';

const JobHero = ({ filteredJobs,jobs }) => {
  const { sortBy, setSortBy, setSearchJob, jobsPerPage, startIndex } = useJobFilter();
  const [searchText, setSearchText] = useState('');

  const endIndex = startIndex + jobsPerPage;
  const numberOfJobsShown = Math.min(filteredJobs.length - startIndex, jobsPerPage);
  const totalFiltered = filteredJobs.length;

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchJob(searchText);
  };

  return (
    <div className="w-full">
      {/* Hero Search Section */}
      <div className="relative border border-lime-200/30 bg-clip-padding bg-opacity-10 bg-lime-100/20 text-center py-16 rounded-2xl backdrop-blur-sm overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-lime-300/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-lime-400/20 rounded-full blur-3xl" />
        </div>

        {/* Floating Images */}
        <div className="hidden md:flex justify-between absolute w-full top-36 -z-10 px-8">
          <img className="w-48 opacity-90 hover:opacity-100 transition-opacity" src={assets.apply} alt="Job application" />
          <img className="w-48 opacity-90 hover:opacity-100 transition-opacity" src={assets.jobApply} alt="Job search" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10">
          <h1 className="text-gray-800 text-3xl md:text-5xl font-bold mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-600">
              {totalFiltered} Jobs
            </span> Available Now
          </h1>
          <p className="text-gray-600 font-medium max-w-2xl mx-auto text-lg">
            Discover your dream role in our hand-picked selection of opportunities across top companies worldwide.
          </p>

          {/* Search Form */}
          <div className="relative max-w-2xl mx-auto mt-8 group">
            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-300 opacity-75 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-md" />
            <form
              onSubmit={handleSearch}
              className="relative bg-white/95 backdrop-blur-sm px-2 h-16 rounded-lg flex items-center overflow-hidden shadow-sm"
            >
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full px-5 bg-transparent placeholder-gray-500 text-gray-700 font-medium outline-none"
                placeholder="Job title, keywords, or company..."
              />
              <div className="pr-1">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-gradient-to-r from-lime-500 to-emerald-600 px-6 py-3 rounded-md text-white font-semibold hover:shadow-lg transition-all duration-300 hover:from-lime-600 hover:to-emerald-700"
                >
                  <span>Search</span>
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="max-w-7xl mx-auto mt-8 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-gray-700 font-medium">
          <Filter className="h-5 w-5 text-lime-600" />
          <span>Filter</span>
        </div>

        <div className="text-gray-600 text-sm sm:text-base">
          <p className="text-sm text-gray-700">
            Showing <span className="font-semibold text-lime-600">{startIndex + filteredJobs.slice(startIndex, endIndex).length}</span> of <span className="font-semibold">{filteredJobs.length}</span> Jobs

          </p>
        </div>

        <div className="flex items-center gap-2 text-gray-700 font-medium">
          <ArrowUpDown className="h-5 w-5 text-lime-600" />
          <span>Sort By:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent border-none outline-none text-lime-600 font-semibold"
          >
            <option>Most Relevant</option>
            <option>Highest Salary</option>
            <option>Lowest Salary</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default JobHero;
