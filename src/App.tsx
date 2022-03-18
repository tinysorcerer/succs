import React from 'react';

import Home from './pages/Home';
import Info from './pages/Info';
import About from './pages/About';

import Header from './pages/Header';

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Home />
        <Info />
        <About />
      </main>
    </>
  );
}
