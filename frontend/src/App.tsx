import React from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';

function App() {
  return (
    <div className={`font-body text-[16px] text-gray-500`}>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
