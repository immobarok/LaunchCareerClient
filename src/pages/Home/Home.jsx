import { useEffect, useState } from "react"
import Hero from "./Hero"
import HiringBanner from "./HiringBanner/HiringBanner"
import HotJobs from "./HotJobs"
import HowItWorks from "./HowItWorks/HowItWorks"
import JobCategory from "./JobCategory"
import Mockup from "./MockUp/Mockup"
import NewsAndBlogs from "./NewsAndBlogs/NewsAndBlogs"
import NewsLetter from "./NewsLetter/NewsLetter"
import PromotionCounter from "./PromotionCounter/PromotionCounter"
import Promotions from "./TopCandidate/Promotions"
import TopRecruiter from "./TopRecruiter/TopRecruiter"

const Home = () => {
  const [blogs, setBlogs] = useState([])
  // Animation variants
  useEffect(() => {
    fetch('./blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, [blogs])
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
      <NewsAndBlogs blogs={blogs} />
      <Mockup />
      <NewsLetter />
    </div>
  )
}

export default Home