import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import AppAppBar from './components/Landing/components/AppAppBar';
import AppTheme from './components/shared-theme/AppTheme';
import { AuthProvider } from "./AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AuthProvider>
  <React.StrictMode>
    <CssVarsProvider defaultMode="system">
     
      <AppTheme>
      <AppAppBar />
      
      <App />
      <AppAppBar />
      
    </AppTheme>
    </CssVarsProvider>
  </React.StrictMode>
</AuthProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
