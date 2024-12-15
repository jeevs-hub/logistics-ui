import FileTypes from '../utils/FileTypes';

const fetchData = async (dataToRetrieve) => {
  
    if (!Object.values(FileTypes).includes(dataToRetrieve)) {
      throw new Error("Not a valid file type");
    }

    const data = await fetchFromFile(dataToRetrieve);
    return data.data;
};
  
const fetchFromFile = async (dataToRetrieve) => {
  try {
    return await import(`../data/${dataToRetrieve}.json`);
  } catch (error) {
    console.error('Error loading data:', error);
    throw error;
  }
};

export default { fetchData }