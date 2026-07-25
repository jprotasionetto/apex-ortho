import { Routes, Route } from 'react-router-dom'
import Avaliacao from './pages/Avaliacao'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Avaliacao />} />
      <Route path="/palestrantes" element={<Dashboard />} />
    </Routes>
  )
}
