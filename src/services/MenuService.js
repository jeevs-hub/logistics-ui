import createDataService from '../factory/DataServiceFactory';
import FileTypes from '../utils/FileTypes';

export const fetchMenuData = async () => {
    const dataService = createDataService();
    return await dataService.fetchData(FileTypes.MENU);
};
  