import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import './App.css';
import AppRoutes from './routes/AppRoutes'; 
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='content'>
        <AppRoutes /> {/* ✅ Solo las rutas, sin un Router */}
      </div>
    </ThemeProvider>
  );
}

export default App;