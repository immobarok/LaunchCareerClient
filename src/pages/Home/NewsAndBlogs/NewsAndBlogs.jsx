import BlogCard from "../../../components/BlogCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router';
import { ChevronRight } from "lucide-react";
import Loader from "../../../components/Loader";

const NewsAndBlogs = ({ blogs, loading }) => {
  if (loading) return <Loader />
  return (
    <section data-aos="fade-up" className="py-10 md:py-20 bg-lime-50 my-6">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">News and Blog</h2>
        <p className="mt-3 text-gray-500">Get the latest news, updates and tips</p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          spaceBetween={30}
          loop={blogs.length > 3}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Link to={'blogs'} className="flex items-center justify-center mt-15">
        <button className="btn my-button flex gap-3 items-center btn-lg">Show All Blogs <ChevronRight /> </button>
      </Link>
    </section>
  );
};

export default NewsAndBlogs;
