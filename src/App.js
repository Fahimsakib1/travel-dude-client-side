import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='main-div'>
      <div className='main-bg-container'>
        <RouterProvider router={routes}></RouterProvider>
        <ToastContainer
          position="top-center"
          autoClose={2000} />

      </div>
    </div>
  );
}

export default App;
