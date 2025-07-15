import React, { useEffect } from 'react';
import useAuth from '../../../hooks/UseAuth';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HowItWorks = () => {
  const { setShowLogin } = useAuth();
  useEffect(() => {
        AOS.init({
          duration: 1000,
          once:true,
        });
      }, []);
  const steps = [
    {
      number: '1',
      title: 'Register an account to Explore',
      desc: 'Create your free account in just a few clicks to access powerful recruitment tools and manage your job postings with ease.',
    },
    {
      number: '2',
      title: 'Explore over thousands of resumes',
      desc: 'Browse a wide range of candidate profiles tailored to your job needs, and filter by skills, experience, or location.',
    },
    {
      number: '3',
      title: 'Find the most suitable candidate',
      desc: 'Shortlist and connect with the best-fit candidates, schedule interviews, and hire faster with our smart recruitment system.',
    }
  ]

  return (
    <div className="bg-white py-12 px-4 sm:px-12 lg:px-20 max-w-full mx-auto">
      <div data-aos='fade-left' className="text-center mb-12 space-y-2">
        <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
        <p className='text-gray-500'>Just via some simple steps, you will find your ideal candidates you’r looking for!</p>
      </div>

      {/* Steps Section */}
      <div data-aos="zoom-in" className="relative flex flex-col sm:flex-row justify-between items-center gap-12 sm:gap-6">
        <div className="hidden md:block absolute top-8 left-0 w-full h-14 pointer-events-none z-0">
          <svg viewBox="0 0 600 100" className="max-w-4xl mx-auto h-auto -mt-17">
            <path
              d="M 0 50 Q 75 0, 150 50 T 300 50 T 450 50 T 600 50"
              stroke="#cfeb7a"
              strokeWidth="3"
              strokeDasharray="10 6"
              strokeLinecap="round"
              fill="none"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="16"
                to="0"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
          </svg>

        </div>

        {steps.map((step, index) => (
          <div key={index} className="relative z-10 flex flex-col items-center text-center max-w-xs">
            <div className="w-24 h-24 rounded-full bg-lime-100 flex items-center justify-center mb-4">
              <span className="text-lime-600 text-2xl font-bold">{step.number}</span>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h3 className="text-xl sm:text-2xl md:text-3x font-semibold text-gray-800 mt-5 mb-2.5 ">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div data-aos='fade-up' className='flex items-center justify-center my-10'>
        <button onClick={()=>setShowLogin(true)} className='btn btn-lg my-button'>Get Started</button>
      </div>
    </div>
  );
};

export default HowItWorks;
