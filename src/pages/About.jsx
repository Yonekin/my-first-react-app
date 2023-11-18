import { useState } from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import AboutPage from '../components/about-page/about-page.jsx';

function About() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <AboutPage></AboutPage>
      <Footer></Footer>
    </>
  )
}

export default About
