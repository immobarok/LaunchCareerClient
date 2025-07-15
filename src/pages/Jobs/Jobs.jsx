import { Search } from 'lucide-react'
import React from 'react'

const Jobs = () => {
  return (
    <div className='w-full my-20 sm:my-32 px-4'>
      <div className='max-w-6xl mx-auto items-center border border-lime-200/30 bg-clip-padding bg-opacity-10 bg-lime-100/20 text-center py-12 rounded-2xl backdrop-filter backdrop-blur-sm'>
        <h1 className='text-gray-800 text-3xl md:text-4xl font-bold mb-3'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-lime-600'>23 Jobs</span> Available Now
        </h1>
        <p className='text-gray-600 font-medium max-w-2xl mx-auto'>
          Discover your dream role in our hand-picked selection of opportunities<br className='hidden sm:block' />
          across top companies worldwide.
        </p>

        <div className='relative max-w-2xl mx-auto mt-8 group'>
          <div className='absolute -inset-0.5 rounded-lg bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-300 opacity-75 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-md animate-gradient'></div>

          <form className='relative bg-white/90 backdrop-blur-sm px-2 h-16 rounded-lg flex items-center overflow-hidden shadow-sm'>
            <input
              type="text"
              className='border-none outline-none w-full px-5 bg-transparent placeholder-gray-500 text-gray-700 font-medium'
              placeholder='Job title, keywords, or company...'
            />
            <div className='pr-1'>
              <button className='flex items-center gap-2 bg-gradient-to-r from-lime-400 to-lime-500 px-6 py-3 rounded-md text-white font-semibold hover:shadow-lg transition-all duration-300 hover:from-lime-600 hover:to-lime-500'>
                <span>Search</span>
                <Search className='h-4 w-4' />
              </button>
            </div>
          </form>
        </div>

        <div className='absolute inset-0 overflow-hidden -z-10'>
          <div className='absolute -top-20 -left-20 w-64 h-64 bg-lime-300/20 rounded-full filter blur-3xl'></div>
          <div className='absolute -bottom-20 -right-20 w-64 h-64 bg-lime-400/20 rounded-full filter blur-3xl'></div>
        </div>
      </div>
    </div>
  )
}

export default Jobs