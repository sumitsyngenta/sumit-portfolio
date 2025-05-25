import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'; // Import the new Home component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Optionally, you can allow separate routes as well */}
          <Route path="/about" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/skills" element={<Home />} />
          <Route path="/experience" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/courses" element={<Home />} />
          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <footer>
          <p>© {new Date().getFullYear()} Sumit Pandey. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;