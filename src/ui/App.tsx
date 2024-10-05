import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//styles
import './App.css'
//Pages
import HomePage from './pages/home-page'
import ErrorNotFoundPage from './pages/error-not-found-page'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<ErrorNotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<>Pokemon detail baby</>} />
      </Routes>
    </Router>
  )
}

export default App
