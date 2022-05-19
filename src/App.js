import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/auth';
import Rotas from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer autoClose={3000} theme="colored" />
        <Rotas />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
