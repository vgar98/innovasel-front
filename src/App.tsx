import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services';
import Footer from './components/Footer';
import AppRoutes from './routes/routes';

const App: React.FC = () => {
  return(
    <Router>
        <div className="flex flex-col min-h-screen bg-white text-gray-900">
          <Navbar />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
        </div>
    </Router>
  )
}

export default App
