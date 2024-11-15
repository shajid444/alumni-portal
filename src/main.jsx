import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

import {

  RouterProvider,
} from "react-router-dom";
import { router } from './router/Routers';
import AuthProvider from './provider/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className='max-w-screen-xl bg-gradient-to-r from-sky-500 to-indigo-500 mx-auto'>
          <RouterProvider router={router} />

        </div>
      </HelmetProvider>
    </AuthProvider>

  </StrictMode>,
)
