// src/App.tsx
import { Outlet } from '@tanstack/react-router'

function App() {
  return (
    <div>
      <h1>Konvo</h1>
      <Outlet />
    </div>
  )
}

export default App
