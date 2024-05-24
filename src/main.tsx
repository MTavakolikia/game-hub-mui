import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './router/router.tsx';
import { getInitialTheme } from './components/ColorMode.tsx';
import { ThemeProviderComponent } from './context/ThemeContext.tsx';
const darkTheme = createTheme({
  palette: {
    mode: getInitialTheme(),
  },
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <ThemeProviderComponent>
        <RouterProvider router={router} />
      </ThemeProviderComponent>
    </ThemeProvider>
  </React.StrictMode>,
)
