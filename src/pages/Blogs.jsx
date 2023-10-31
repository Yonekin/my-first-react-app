import { useState } from 'react'
import Navbar from '../components/navbar.jsx'
import Landingpage from '../components/landing-page/landing-page.jsx'
import Footer from '../components/footer.jsx'
import Blog from '../components/blog.jsx'
import Blogcard from '../components/blog-card.jsx'

function Blogs() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Blogcard></Blogcard>
      <Footer></Footer>
    </>
  )
}

export default Blogs
