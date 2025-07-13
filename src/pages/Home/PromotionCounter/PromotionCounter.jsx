import CountUp from 'react-countup';
const PromotionCounter = () => {
  const clientCounter = [
    {
      "count": 9,
      "suffix": "K+",
      "title": "Completed Cases",
      "description": "We always provide people a complete solution upon focused of any business"
    },
    {
      "count": 10,
      "suffix": "+",
      "title": "Our Office",
      "description": "We always provide people a complete solution upon focused of any business"
    },
    {
      "count": 33,
      "suffix": "K+",
      "title": "Skilled People",
      "description": "We always provide people a complete solution upon focused of any business"
    },
    {
      "count": 10,
      "suffix": "K+",
      "title": "Happy Clients",
      "description": "We always provide people a complete solution upon focused of any business"
    }
  ];

  return (
    <div className='max-w-6xl mx-auto my-10 sm:my-20'>
      <div className='grid grid-cols-4 gap-4 items-center text-center'>
        {
          clientCounter.map((counter, idx) => {
            return (
              <div key={idx} className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-lime-500">
                  <CountUp
                    start={0}
                    end={counter.count}
                    duration={5}
                    separator=","
                  />{counter.suffix}
                </h1>
                <h2 className="text-2xl sm:text-3xl font-medium text-gray-800">{counter.title}</h2>
                <p className="text-gray-500">{counter.description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default PromotionCounter