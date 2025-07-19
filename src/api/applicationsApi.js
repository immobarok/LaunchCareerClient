export const myApplicationsPromise = async (email, accessToken) => {
    const res = await fetch(`http://localhost:4000/applications?email=${email}`, {
    credentials: 'include',
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  })
  return await res.json()
}