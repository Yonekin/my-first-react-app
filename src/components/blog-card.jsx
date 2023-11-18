
import './blog-cardcss.css'

function Blogcard(json) {

    return (
        <div className='blog-card'>
            <a href={'/blogz/' + json.id}>
            <hr></hr>
                <h1 className='blog-card-header' key={json.id}>{json.titel}</h1>
                <div className='date'>{json.date}</div>
            </a>
        </div>
    );
}
export default Blogcard
