// export const fetchAPI = async (request) => {
//   const url = 'https://swapi.co/api/';
//   try {
//     const response = await fetch(request);
//     if (!response.ok) {
//       throw Error(response.statusText)
//     }
//     return result = await response.json()
    
//   }
//   catch (error) {
//     // this.setState({
//     //   error,
//     //   isLoading: false
//     // });
//   }
  
// };

export const fetchAPI = async (request) => {
  const response = await fetch(request);
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response.json()
}

// export default {
//   fetchApi
// }