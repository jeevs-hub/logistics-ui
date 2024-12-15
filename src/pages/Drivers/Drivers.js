import React, { useState, useEffect } from 'react';
import { fetchDriverData, filterDriverData } from '../../services/DriverService';
import SearchButton from '../../components/SearchButton/SearchButton';
import './Drivers.css';

const Drivers = () => {
  const [drivers, setDrivers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadDriverData = async () => {
    try {
      const data = await fetchDriverData();
      setDrivers(data);
    } catch (err) {
      setError('Error loading driver data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDriverData();
  }, []);

  if (loading) {
    return <div>Loading drivers...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const onSearch = async (searchString) => {
    const filteredDrivers = await filterDriverData(searchString);
    setDrivers(filteredDrivers);
  };

  return (
    <div>
      <div className='search-button'>
        <SearchButton placeholder={"Search for Driver"} onSearch={onSearch}/>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Vehicle Reg</th>
            <th scope="col">activity duration</th>
            {daysOfWeek.map((x, index)=> <th scope="col" key={index}>{x.substring(0,3)}</th>)}
          </tr>
        </thead>
        <tbody>
          {drivers.map(driver => (
            <tr key={driver.id}>
              <td className='table-cell'>{driver.name}</td>
              <td className='table-cell'>{driver.vehicleRegistration}</td>
              <td className='table-cell'>{driver.minsWorked}</td>
              {
                daysOfWeek.map((_, idx) => <td key={idx} className={'table-cell ' + (driver.daysWorked.includes(idx) && 'highlighted-cell')}></td>)
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Drivers;