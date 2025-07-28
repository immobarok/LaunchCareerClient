import { Suspense } from "react";
import useAuth from "../../hooks/UseAuth"
import JobList from "./JobList"
import { jobsCreatedByPromise } from "../../api/jobsApi";

const MyPostedJob = () => {
  const { user } = useAuth();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 my-20">
      <Suspense>
        <JobList jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></JobList>
      </Suspense>
    </div>
  )
}
export default MyPostedJob