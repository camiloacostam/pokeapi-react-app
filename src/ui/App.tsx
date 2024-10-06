import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//styles
import './App.css'
//Pages
import ErrorNotFoundPage from './templates/error-not-found-page'
import HomePage from './pages/home-page'
import PokemonDetailPage from './pages/pokemon-detail-page'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<ErrorNotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
      </Routes>
    </Router>
  )
}

export default App
