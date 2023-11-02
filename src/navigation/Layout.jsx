import Header from './header';
import Footer from './footer';

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
