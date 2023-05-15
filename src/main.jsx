import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layouts/Main.jsx'
import Home from './pages/Home/Home.jsx'
import AddEvents from './pages/AddEvents/AddEvents.jsx'
import RegisterEvent from './pages/RegisterEvent/RegisterEvent.jsx'
import Login from './pages/Shared/Login.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import Bookings from './pages/Bookings/Bookings.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import Register from './pages/Shared/Register.jsx'
import RegisterList from './pages/RegisterList/RegisterList.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/volunteers')
      },
      {
        path: '/addEvent',
        element: <AddEvents></AddEvents>
      },
      {
        path: '/volunteer/:id',
        element: <PrivateRoute><RegisterEvent></RegisterEvent></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/volunteers/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/bookings',
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/registerList',
        element: <RegisterList></RegisterList>,
        loader: () => fetch('http://localhost:5000/users')
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
)
