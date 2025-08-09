import './App.css';
import Home from './pages/Home';
import SignIn from './components/Login/SignIn';
import SignUp from './components/Signup/Signup';
import { Routes, Route } from 'react-router-dom';
import MarketingPage from './components/Landing/MarketingPage';
import AppAppBar from './components/Landing/components/AppAppBar'; 

function App() {
  return (

       <>
      <AppAppBar /> {/* ✅ Navbar always visible */}
      <Routes>
        <Route path="/" element={<MarketingPage />} />
        <Route path="/landing" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>

  );
}

export default App;
