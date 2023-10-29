import './landing-pagecss.css'
import Landingtext from './landing-text.jsx'
import Landingimg from './landing-img.jsx'
function Landingpage() {

    return (
        <div className="landing-page">
            <Landingtext></Landingtext>
            <Landingimg></Landingimg>
        </div>
    );
}
export default Landingpage