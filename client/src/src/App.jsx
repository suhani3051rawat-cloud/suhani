import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AppRoutes from './routes/AppRoutes';
import UserRegister from './pages/UserRegister.jsx';

function App() {
  return (
   <>
      <Navbar/>
      <HeroSection/>
      <AppRoutes/>
   </>
  )
}

export default App;