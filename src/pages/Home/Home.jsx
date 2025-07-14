import Hero from "./Hero"
import HiringBanner from "./HiringBanner/HiringBanner"
import HotJobs from "./HotJobs"
import HowItWorks from "./HowItWorks/HowItWorks"
import JobCategory from "./JobCategory"
import PromotionCounter from "./PromotionCounter/PromotionCounter"
import Promotions from "./TopCandidate/Promotions"
import TopRecruiter from "./TopRecruiter/TopRecruiter"

const Home = () => {
  // Animation variants
  return (
    <div>
      <Hero />
      <HiringBanner />
      <JobCategory />
      <HotJobs />
      <Promotions />
      <PromotionCounter />
      <TopRecruiter />
      <HowItWorks />
    </div>
  )
}

export default Home