import Hero from "./Hero"
import HotJobs from "./HotJobs"
import JobCategory from "./JobCategory"
import Promotions from "./TopCandidate/Promotions"

const Home = () => {
  // Animation variants
  return (
    <div>
      <Hero />
      <JobCategory />
      <HotJobs />
      <Promotions />
    </div>
  )
}

export default Home