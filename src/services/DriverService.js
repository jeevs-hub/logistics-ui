import FileTypes from '../utils/FileTypes';
import createDataService from '../factory/DataServiceFactory';
import JsonDataService from './JsonDataService';

const formatDriverData = (driverData) => driverData.map(driver => {
  let minsWorked = 0;
  let daysWorked = [];

  driver.traces.forEach(x => {
    const dateString = x.date.endsWith('T00:00:00') ? x.date : `${x.date}T00:00:00Z`; // Ensure UTC time format
    const date = new Date(dateString);
    //get the day as an index using monday as 0 tues as 1 etc.
    //default behaviour is sunday 0, mon 1 etc
    const dayOfWeek = (date.getUTCDay() + 6) % 7;
    daysWorked.push(dayOfWeek);
    minsWorked += x.activity.reduce((total, act) => total + act.duration, 0);
  });

  return {
    id: driver.driverID,
    name: `${driver.forename} ${driver.surname}`,
    vehicleRegistration: driver.vehicleRegistration,
    minsWorked,
    daysWorked,
  };
});

const fetchDriverData = async () => {
    const dataService = createDataService();
    const data = await dataService.fetchData(FileTypes.DRIVERS);

    // Format only if using JSON file
    if (dataService === JsonDataService) {
        return formatDriverData(data);
    }
  
    return data;
};

const filterDriverData = async (name) => {
    const dataService = createDataService();

    if (dataService === JsonDataService) {
        const allDrivers = await fetchDriverData();
        return allDrivers.filter((driver) => driver.name.toLowerCase().includes(name.toLowerCase()));    
    }

    return await dataService.fetchData(`drivers/${name}`);
};
  
export {
  fetchDriverData,
  filterDriverData,
};
