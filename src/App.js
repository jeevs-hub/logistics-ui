import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidebarLayout from './layouts/SidebarLayout';
import Logo from './components/Logo/Logo';
import { fetchMenuData } from './services/MenuService';
import Drivers from './pages/Drivers/Drivers';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Vehicles from './pages/Vehicles/Vehicles';
import Error from './pages/Error/Error';

import './App.css';

function App() {
  const [menu, setMenu] = useState([]);

  const loadMenuData = async () => {
    const data = await fetchMenuData();
    setMenu(data);
  };

  useEffect(() => {
    loadMenuData();
  }, []);

  const componentsMap = { Home, About, Drivers, Vehicles };

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Logo width="100%" />
      </header>

      <div className="App-content">
      <SidebarLayout menu={menu}>
        <Routes>
          {menu.map((menuItem, idx) => {
            const Component = componentsMap[menuItem.title] ||  Error;
            return <Route key={idx} path={menuItem.url} element={<Component />} />
          })}
          <Route path="*" element={<Error />} />
        </Routes>
      </SidebarLayout>
      </div>
    </div>
  </Router>
  );
}

export default App;
