import { useState } from 'react'
import Navbar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx'
import Blog from '../components/blog.jsx'

function Blogz() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Blog></Blog>
      <Footer></Footer>
    </>
  )
}

export default Blogz
