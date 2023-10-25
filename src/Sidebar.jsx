import React, { useState } from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import './Sidebar.css'
const Sidebar = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <a onClick={() => handlePageChange('Home')}>Trang chủ</a>
        </li>
        <li>
          <a onClick={() => handlePageChange('About')}>Giới thiệu</a>
        </li>
        <li>
          <a onClick={() => handlePageChange('Contact')}>Liên hệ</a>
        </li>
      </ul>

      <div className="content">
        {currentPage === 'Home' && <Home/>}
        {currentPage === 'About' && <About/>}
        {currentPage === 'Contact' && <Contact/>}
      </div>
    </div>
  );
};

export default Sidebar;