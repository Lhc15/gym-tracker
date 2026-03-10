// src/App.jsx
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Workout from './pages/Workout'
import useGymStore from './store/useGymStore'

export default function App() {
  const loadFromSupabase = useGymStore(s => s.loadFromSupabase)

  useEffect(() => {
    loadFromSupabase()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout/:routineKey" element={<Workout />} />
      </Routes>
    </BrowserRouter>
  )
}