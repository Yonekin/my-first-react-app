import { useState } from 'react'
import Navbar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx'
import Blogcards from '../components/blog-cards.jsx'

function Blogs() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <div className='main-div' style={{ height: '80%' }}>
        <Blogcards></Blogcards>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Blogs
