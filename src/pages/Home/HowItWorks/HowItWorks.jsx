import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Register an account to start',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
    },
    {
      number: '2',
      title: 'Explore over thousands of resumes',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
    },
    {
      number: '3',
      title: 'Find the most suitable candidate',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">How It Works</h2>
        <p>Just via some simple steps, you will find your ideal candidates you’r looking for!</p>
      </div>

      {/* Steps Section */}
      <div className="relative flex flex-col sm:flex-row justify-between items-center gap-12 sm:gap-6">
        <div className="hidden md:block absolute top-8 left-0 w-full h-14 pointer-events-none z-0">
          <svg viewBox="0 0 600 100" className="max-w-4xl mx-auto h-auto -mt-15">
            <path
              d="M 0 50 Q 75 0, 150 50 T 300 50 T 450 50 T 600 50"
              stroke="#60a5fa"
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
            <div className="w-16 h-16 rounded-full bg-lime-100 flex items-center justify-center mb-4">
              <span className="text-lime-600 text-2xl font-bold">{step.number}</span>
            </div>
            <h3 className="text-base font-semibold text-gray-800 mb-2">{step.title}</h3>
            <p className="text-sm text-gray-500">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
