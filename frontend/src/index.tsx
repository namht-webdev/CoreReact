import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
const container = document.getElementById('root');
// OH BOY, container can be null but createRoot can't handle this...
if (!container) {
  // eslint-disable-next-line no-throw-literal
  throw "Can't instantiate";
}
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
