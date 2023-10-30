import { useState } from 'react'
import Navbar from '../components/navbar.jsx'
import Landingpage from '../components/landing-page/landing-page.jsx'
import Footer from '../components/footer.jsx'

function Landing() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Landingpage></Landingpage>
      <Footer></Footer>
    </>
  )
}

export default Landing
