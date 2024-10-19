import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store from './Store/Store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './Pages/SignUp.jsx';
import Loginpage from './Pages/Loginpage.jsx';
import Home from './Pages/Home.jsx';
import App from "./App.jsx"



const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Loginpage />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ],
  },
]);

// Create the root and render the RouterProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>
);
