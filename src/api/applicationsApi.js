export const myApplicationsPromise = async (email, accessToken) => {
  const res = await fetch(`https://job-pilot-server-pf92.vercel.app/?email=${email}`, {
    credentials: 'include',
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  })
  return await res.json()
}