
import './footercss.css'

function Footer() {
    
    return (
        <footer>
            <div class="footer-content">
                <div class="social-links">
                    <a href="https://github.com/Yonekin" alt="github">
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="GitHub"></img>
                    </a>
                    <a href="https://www.instagram.com/y.o.g.u.r.t1/" alt="instagram">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                            alt="Instagram"></img>
                    </a>
                </div>
                <p>&copy; 2023-{new Date().getFullYear()} Yonekin. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer
