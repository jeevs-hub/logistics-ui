import JsonDataService from '../services/JsonDataService';
import ApiDataService from '../services/ApiDataService';

const createDataService = () => {
  return process.env.REACT_APP_LOAD_DATA_FROM_API === 'true'
    ? ApiDataService
    : JsonDataService;
};

export default createDataService;