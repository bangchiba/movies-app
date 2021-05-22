import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <div className="font-sans bg-gray-900 text-white">
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout;
