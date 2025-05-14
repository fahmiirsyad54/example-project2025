import React from 'react';
import { createRoot } from 'react-dom/client';
import MenuApp from './components/MenuApp';

import './styles/style.css';
 
 
const root = createRoot(document.getElementById('root'));
root.render(<MenuApp />);