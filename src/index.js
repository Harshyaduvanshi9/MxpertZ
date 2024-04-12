import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import StoryDetails from './Component/StoryDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));

const appR=createBrowserRouter([{
path:"/",
element:<App />,

},{

  path:"/stories/:_id",
  element:<StoryDetails />
}

]);


root.render(
  <React.StrictMode>
    <RouterProvider router={appR}/>
  </React.StrictMode>
);


reportWebVitals();
