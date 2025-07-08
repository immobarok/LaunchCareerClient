import React, { useEffect, useState } from 'react'

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/jobs')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])
  return (
    <div>

    </div>
  )
}

export default HotJobs