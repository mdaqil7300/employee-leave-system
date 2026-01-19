import './App.css'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/auth/Login'
import AdminDashboard from './pages/admin/AdminDashboard'
import AllLeaves from './pages/admin/AllLeaves'
import EmpDashboard from './pages/employee/EmpDashboard'
import ApplyLeave from './pages/employee/ApplyLeave'
import MangerDashboard from './pages/manager/MangerDashboard'
import ProtectedRoute from './pages/auth/ProtectedRoute'

function App() {
  const [user, setUser] = useState(null)

  return (
    <>
      <div className="row me-0 ms-0">
        <Header user={user} setUser={setUser} />
        <div style={{ marginTop: "56px", padding: "16px" }}>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Login setUser={setUser} />} />
            <Route path="/login" element={<Login setUser={setUser} />} />

            {/* Admin */}
            <Route
              path="/adminDashboard"
              element={
                <ProtectedRoute user={user} allowedRoles={'Admin Department Employee'}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/allLeaves"
              element={
                <ProtectedRoute user={user} allowedRoles={'Admin Department Employee'}>
                  <AllLeaves />
                </ProtectedRoute>
              }
            />

            {/* Employee */}
            <Route
              path="/empDashboard"
              element={
                <ProtectedRoute user={user} allowedRoles={'employee'}>
                  <EmpDashboard user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/applyLeave"
              element={
                <ProtectedRoute user={user} allowedRoles={'employee'}>
                  <ApplyLeave user={user} />
                </ProtectedRoute>
              }
            />

            {/* Manager */}
            <Route
              path="/managerDashboard"
              element={
                <ProtectedRoute user={user} allowedRoles={'Department Head'}>
                  <MangerDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
