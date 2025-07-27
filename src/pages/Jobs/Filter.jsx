import useJobFilter from "../../hooks/UseJobFilter";

const Filter = () => {
  const {
    filters,
    updateFilter,
    clearFilters
  } = useJobFilter();

  const handleJobTypeChange = (type) => {
    const currentTypes = filters.jobType;
    const updatedTypes = currentTypes.includes(type)
      ? currentTypes.filter(item => item !== type)
      : [...currentTypes, type];
    updateFilter('jobType', updatedTypes);
  };

  const handleReset = () => {
    clearFilters();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full md:w-72 space-y-6">
      {/* Job Type */}
      <div>
        <h2 className="font-semibold text-lg mb-2">Job Type</h2>
        {['Full-Time', 'Part-Time', 'Remote', 'Internship'].map(type => (
          <label key={type} className="flex items-center space-x-2 mb-1">
            <input
              type="checkbox"
              checked={filters.jobType.includes(type)}
              onChange={() => handleJobTypeChange(type)}
              className="accent-blue-500"
            />
            <span>{type}</span>
          </label>
        ))}
      </div>

      {/* Experience */}
      <div>
        <h2 className="font-semibold text-lg mb-2">Experience</h2>
        {['Entry', 'Mid', 'Senior'].map(level => (
          <label key={level} className="flex items-center space-x-2 mb-1">
            <input
              type="radio"
              name="experience"
              value={level}
              checked={filters.experience === level}
              onChange={() => updateFilter('experience', level)}
              className="accent-blue-500"
            />
            <span>{level} Level</span>
          </label>
        ))}
      </div>

      {/* Salary */}
      <div>
        <h2 className="font-semibold text-lg mb-2">Salary Range</h2>
        <input
          type="range"
          min="0"
          max="200000"
          step="100"
          value={filters.salaryRange[1]}
          onChange={(e) =>
            updateFilter('salaryRange', [0, parseInt(e.target.value)])
          }
          className="w-full accent-blue-500"
        />
        <p className="text-sm text-gray-600 mt-1">Up to ${filters.salaryRange[1]}</p>
      </div>

      {/* Location */}
      <div>
        <h2 className="font-semibold text-lg mb-2">Location</h2>
        <select
          value={filters.location}
          onChange={(e) => updateFilter('location', e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Select Location</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Chittagong">Chittagong</option>
          <option value="Remote">Remote</option>
        </select>
      </div>

      {/* Reset Button */}
      <div className="flex justify-end">
        <button
          onClick={handleReset}
          className="bg-red-100 text-red-600 px-4 py-2 rounded hover:bg-red-200"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
