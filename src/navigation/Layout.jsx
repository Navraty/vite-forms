import Header from './Header';
import Footer from './Footer';

import React from 'react';

  function Layout({children}) {
  return (
    <div> 
      <Header/>
        {children}
      <Footer/>
    </div>

  );
}

export default Layout;
