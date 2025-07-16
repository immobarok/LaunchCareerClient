import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './router/Router';
import AuthProvider from './provider/AuthProvider';
import JobFilterProvider from './provider/JobFilterProvider/JobFilterProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JobFilterProvider>
      <AuthProvider>
        <RouterProvider router={router}>
        </RouterProvider>
      </AuthProvider>
    </JobFilterProvider>
  </StrictMode>,
)
