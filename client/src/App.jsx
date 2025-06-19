import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Alerts from './pages/Alerts';
import './App.css'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/alerts' element={<Alerts />} />
        </Routes>
      </Router>
    </>
  )
}