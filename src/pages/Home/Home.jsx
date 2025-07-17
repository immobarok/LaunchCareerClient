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
import Loader from "../../components/Loader"
import axiosInatance from "../../utils/axiosInatance"

const Home = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true);
  // Animation variants
  useEffect(() => {
    const fetchedBlogs = async () => {
      try {
        const res = await axiosInatance.get('/blogs')
        console.log("from blofs", res.data)
        setBlogs(res.data);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchedBlogs();
  }, []);
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
      <NewsAndBlogs blogs={blogs} loading={loading} />
      <Mockup />
      <NewsLetter />
    </div>
  )
}

export default Home