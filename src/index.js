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
// children:[{

//   path:"/stories/:storyId",
//   element:<StoryDetails/>

// }]

},{

  path:"/stories/:storyId",
  element:<StoryDetails />
}

]);


root.render(
  <React.StrictMode>
    <RouterProvider router={appR}/>
  </React.StrictMode>
);


reportWebVitals();
