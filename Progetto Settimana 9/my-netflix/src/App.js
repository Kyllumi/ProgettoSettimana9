import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import MyHomepage from './components/MyHomepage';
import MyAccount from './components/MyAccount';
import MySettings from './components/MySettings';
import MyFooter from './components/MyFooter';


function App() {
  return (
    <div className="App">

      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<MyHomepage />} />
          <Route path="/profile" element={<MyAccount />} />
          <Route path="/settings" element={<MySettings />} />
        </Routes>
        <MyFooter />
      </Router>

    </div>
  );
}

export default App;
