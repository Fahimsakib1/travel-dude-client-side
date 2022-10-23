import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className=''>
      <RouterProvider router={routes}></RouterProvider>
      {/* <Toaster
        position="top-center"
        reverseOrder={false}
      /> */}
      <ToastContainer 
        position="top-center"
        autoClose={2000} />

    </div>
  );
}

export default App;
