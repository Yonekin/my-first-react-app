import './landing-textcss.css'

function Landingtext() {

    return (
        <div className="landing-text">
              <div className="intro-text">
                <h1> Hi iam Yonis. </h1>
                <h2>
                    This is a Students,<br></br>
                    and Software Developers<br></br>
                    Blog.
                </h2>
            </div>
            <div className='landing-buttons'>
           
                <a href='#'  id='mobile-button1'  className='landing-button'>Blogs</a>
                <a href='#' className='landing-button'>About</a>
            </div>
            
            <hr className='line'></hr>
            <div className="content-desktop">
                <div className="blog-landing">
                    <a href="">Blog about Ai</a>
                </div>
                <div className="blog-landing">
                    <a href="">Blog about Maschine Learning</a>
                </div>
                <div className="blog-landing">
                    <a href="">Blog about Learning</a>
                </div>
            </div>
        </div>
    );
}
export default Landingtext