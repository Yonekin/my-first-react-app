import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import Landingpage from './components/landing-page/landing-page.jsx'
import Footer from './components/footer.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import About from './pages/About.jsx'; // Import the About component
import Blogs from './pages/Blogs.jsx'; // Import the Blogs component

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogs/:id" element={<Blogs/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
