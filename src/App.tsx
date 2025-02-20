
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage';
import { RecoilRoot } from 'recoil';

function App() {

  return (
    <Router>
      <RecoilRoot>
      <div>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/register" element={<RegisterPage />}/>
        </Routes>
      </div>
      </RecoilRoot>
    </Router>
  )
}

export default App
