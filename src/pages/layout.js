import React from 'react';
import Footer from '../components/footer.js';
import NavHeader from '../components/navheader';
import QuickSideBar from '../components/quicksidebar'

export default ({ children }) => {
  return (
    <div style={{ position: 'relative', display:'flex', flexDirection:'row' }}>
      <div style={{flex:1}}>
        <NavHeader />
        {children}
        <Footer />
      </div>
      <QuickSideBar />
    </div>
  );
};
