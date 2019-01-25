export const fetchAPI = async (request) => {
  const response = await fetch(request);
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response.json()
}