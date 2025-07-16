import { useContext } from "react";
import { JobFilterContext } from "../provider/JobFilterProvider/JobFilterContext";

const useJobFilter = () => {
  const filterInfo = useContext(JobFilterContext);
  return filterInfo;
};

export default useJobFilter;