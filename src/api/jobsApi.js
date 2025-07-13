export const jobsCreatedByPromise = async email => {
  const res = await fetch(`http://localhost:4000/jobs/applications?email=${email}`,{
    credentials: 'include'
  })
  return await res.json()
}