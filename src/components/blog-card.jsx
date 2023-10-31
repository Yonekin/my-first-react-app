
import './blog-cardcss.css'

function Blogcard() {
    
  const fetchBlogs = async () => {
      let blogs = [];
      let count = 1
    while(true){
          const response = await fetch(`../blogs/blog${id}.json`);
    
          if (!response.ok) {
            break;
          }
    
        blogs[id] = await response.json();
            
    }
    return blogs;
  };
    return (
        <div>
            <h1 className='blog-card'>Blog über ein unglaublich interessantes Thema</h1>
            27.10.2023
        </div>
    );
}
export default Blogcard
