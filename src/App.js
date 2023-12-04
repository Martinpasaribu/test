
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Kerja from './components/Kerja';
import Pesan from './components/Pesan';
import List from './components/List';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Navbar/>
      <Hero />
      <Kerja />
      <Pesan />
      <List/>
      <Footer/>

    </div>
  );
}

export default App;
