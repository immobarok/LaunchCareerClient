import { useEffect, useState } from "react"
import axiosInatance from "../../utils/axiosInatance";
import useAuth from "../../hooks/UseAuth";
import BlogContainer from "./BlogContainer";
import BlogHero from "./BlogHero";
import Loader from "../../components/Loader";
import NewsLetter from './../Home/NewsLetter/NewsLetter';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchedBlogs = async () => {
      try {
        const res = await axiosInatance.get('/blogs')
        setBlogs(res.data);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchedBlogs();
  }, []);
  if (loading) return <Loader />
  return (
    <div>
      <BlogHero blogs={blogs} />
      <BlogContainer blogs={blogs} />
      <NewsLetter />
    </div>
  )
}

export default Blogs