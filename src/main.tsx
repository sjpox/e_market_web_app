import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import store from './redux/store.ts'

const Home = lazy(() => import('./pages/Home/Home.tsx'))
const AdminHome = lazy(() => import('./pages/Admin/pages/Home/Home.tsx'))
const Product = lazy(() => import('./pages/Product/Product.tsx'))
const Error = lazy(() => import('./pages/Error/Error.tsx'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>
  },
  {
    path: "/product",
    element: <Product/>,
    errorElement: <Error/>
  },
  {
    path: "/admin",
    element: <AdminHome/>
  },
  {
    path: "*",
    element: <Error/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div>Loading page...</div>}>
        <RouterProvider router={router}/>
      </Suspense>
    </Provider>
  </StrictMode>
)
