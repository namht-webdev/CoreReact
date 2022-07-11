import React from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';

const App: React.FC = () => {
  return (
    <div className={`font-body text-[16px] text-gray-500`}>
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
