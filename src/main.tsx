import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },{
    path: "/app",
    element: <App></App>,
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
