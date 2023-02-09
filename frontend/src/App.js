import React from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {


  return (
    <>
      <Login />


      <ToastContainer autoClose={1000} position='top-right' />
    </>
  )
}

export default App
