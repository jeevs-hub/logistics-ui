const fetchData = async (endpoint) => {
    const baseUrl = process.env.REACT_APP_LOGISTICS_API_URL;
    if (!baseUrl) {
      console.error("Api url must be set.");
      throw new Error("Could not query Api");
    }
    return await fetchFromApi(`${baseUrl}${endpoint}`);
};
  
const fetchFromApi = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw error;
  }
};

export default { fetchData }