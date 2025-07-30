import './App.css';

import Home from './pages/Home';
import SignIn from './components/Login/SignIn';
import SignUp from './components/Signup/Signup';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MarketingPage from './components/Landing/MarketingPage';


function App() {
  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<MarketingPage />} />
      <Route path="/landing" element={<Home />} />
      <Route path="/login" element={< SignIn />} />
      <Route path="/signup" element={< SignUp />} />
    </Routes>
  </Router>
  );
}

export default App;
