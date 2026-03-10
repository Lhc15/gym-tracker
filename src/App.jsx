// src/App.jsx
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Workout from './pages/Workout'
import Login from './pages/Login'
import useGymStore, { getUserCode } from './store/useGymStore'

export default function App() {
  const [hasCode, setHasCode] = useState(!!getUserCode())
  const loadData = useGymStore(s => s.loadData)

  useEffect(() => {
    if (hasCode) loadData()
  }, [hasCode])

  if (!hasCode) {
    return <Login onLogin={() => { setHasCode(true) }} />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout/:routineKey" element={<Workout />} />
      </Routes>
    </BrowserRouter>
  )
}