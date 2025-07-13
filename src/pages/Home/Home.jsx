import Hero from "./Hero"
import HotJobs from "./HotJobs"
import JobByLocation from "./JobByLocation/JobByLocation"
import JobCategory from "./JobCategory"
import PromotionCounter from "./PromotionCounter/PromotionCounter"
import Promotions from "./TopCandidate/Promotions"
import TopRecruiter from "./TopRecruiter/TopRecruiter"

const Home = () => {
  // Animation variants
  return (
    <div>
      <Hero />
      <JobCategory />
      <HotJobs />
      <Promotions />
      <PromotionCounter />
      <TopRecruiter />
      <JobByLocation />
    </div>
  )
}

export default Home