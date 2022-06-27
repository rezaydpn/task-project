import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

export const Index = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
const root = createRoot(document.getElementById('root'));
root.render(<Index />);
