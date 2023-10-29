import './navbarcss.css'

function Navbar() {

    return (
        <nav>
            <a className="logo" href="#">yonisblog</a>
            <input type="checkbox" id="toggle_button"></input>
                <label for="toggle_button" className="toggle_button">  
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </label>
                <ul>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
        </nav>
    );
}
export default Navbar