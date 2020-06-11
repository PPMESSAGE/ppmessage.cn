import React from 'react';
import Footer from '../components/footer.js';
import NavHeader from '../components/navheader';
import QuickSideBar from '../components/quicksidebar'

export default ({children}) => {
  return (
    <div style={{position:'relative'}}>
      <QuickSideBar />
      <NavHeader />
      {children}
      <Footer />
    </div>
  );
};
