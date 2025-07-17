import React, { useState } from 'react'
import BlogCard from '../../components/BlogCard'

const BlogContainer = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;
  const totalPage = Math.ceil(blogs?.length / 9)
  const startIndex = (currentPage - 1) * blogsPerPage;
  const slicedblogs = blogs.slice(startIndex, startIndex + blogsPerPage);

  const handleChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPage) {
      setCurrentPage(pageNumber)
    }
  }
  return (
    <div className='max-w-7xl mx-auto px-16'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {
          slicedblogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
        }
      </div>
      <div className="join flex justify-center items-center my-8 gap-2">
        <button
          className="join-item btn"
          onClick={() => handleChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          «
        </button>
        {
          [...Array(totalPage).keys()].map((_, idx) => (
            <button
              key={idx + 1}
              onClick={() => handleChange(idx + 1)}
              className={`join-item btn ${currentPage === idx + 1 ? 'bg-lime-500 text-white' : ''}`}
            >
              {idx + 1}
            </button>
          ))
        }
        <button
          className="join-item btn"
          onClick={() => handleChange(currentPage + 1)}
          disabled={currentPage === totalPage}
        >
          »
        </button>
      </div>
    </div>
  )
}

export default BlogContainer