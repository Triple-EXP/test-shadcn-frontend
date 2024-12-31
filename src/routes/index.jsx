import { Route, Routes } from 'react-router-dom'
import { PublicRoute } from './public-route'
import { PrivateRoute } from './private-route'
import LoginPage from '@/app/login/page'
import Dashboard from '@/app/dashboard/page'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route 
        path="/"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route 
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}