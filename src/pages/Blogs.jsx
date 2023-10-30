import { useState } from 'react'
import Navbar from '../components/navbar.jsx'
import Landingpage from '../components/landing-page/landing-page.jsx'
import Footer from '../components/footer.jsx'
import Blog from '../components/blog.jsx'

function Landing() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Blog></Blog>
      <Footer></Footer>
    </>
  )
}

export default Landing
