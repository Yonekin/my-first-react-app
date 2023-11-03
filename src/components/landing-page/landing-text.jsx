import Blogcard from '../blog-card'; '../blog-card';
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

                <a href='#' id='mobile-button1' className='landing-button'>Blogs</a>
                <a href='/About' className='landing-button'>About</a>
            </div>

            <hr className='line'></hr>
            <div className="content-desktop">
                {Blogcard({
                    "id": "2",
                    "titel": "How to Animate a rotating 3D Cube",
                    "date": "27.09.2023",
                    "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                })}
                {Blogcard({
                    "id": "2",
                    "titel": "How to Animate a rotating 3D Cube",
                    "date": "27.09.2023",
                    "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                })}
                {Blogcard({
                    "id": "2",
                    "titel": "How to Animate a rotating 3D Cube",
                    "date": "27.09.2023",
                    "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                })}
          
            </div>
        </div>
    );
}
export default Landingtext