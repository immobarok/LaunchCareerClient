export const jobsCreatedByPromise = async email => {
  const res = await fetch(`https://job-pilot-server-pf92.vercel.app/jobs/applications?email=${email}`,{
    credentials: 'include'
  })
  return await res.json()
}