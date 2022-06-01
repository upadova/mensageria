import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/auth';
import Rotas from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
      <ToastContainer position="bottom-center" autoClose={3000} theme="colored" />
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
