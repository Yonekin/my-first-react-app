import { useState } from 'react'
import Navbar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx'
import Blogcards from '../components/blog-cards.jsx'

function Blogs() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <div className='footer-block' >
        <Blogcards></Blogcards>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Blogs
