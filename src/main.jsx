import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import Following from './pages/Following/index.jsx'
import GlobalStyles from './components/GlobalStyles/index.js'
import DefaultLayout from './components/Layouts/DefaultLayout/index.jsx'
import Upload from './pages/Upload/index.jsx'
import HeaderOnly from './components/Layouts/HeaderOnly/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: < DefaultLayout />,
    children: [
      {
        path: '/',
        element: < App />
      },
      {
        path: '/following',
        element: < Following />
      }
    ]
  },
  {
    path: '/',
    element: < HeaderOnly />,
    children: [
      {
        path: '/upload',
        element: < Upload />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles>
      <RouterProvider router={router} />
    </GlobalStyles>
  </React.StrictMode>,
)