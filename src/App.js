import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import Landing from './pages/Landing';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
