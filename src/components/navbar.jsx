import './navbarcss.css'

function Navbar() {

    return (
        <nav>
            <a className="logo" href="/">yonisblog</a>
            <input type="checkbox" id="toggle_button"></input>
                <label for="toggle_button" className="toggle_button">  
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </label>
                <ul>
                    <li><a href="/blogs">Blogs</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
        </nav>
    );
}
export default Navbar