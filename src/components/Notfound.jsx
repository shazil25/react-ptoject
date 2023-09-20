import {Link } from 'react-router-dom';
const Notfound = () => {
    return (  
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found!!</p>
            <Link to="/"><button>Back to home page.... </button></Link>
        </div>
    );
}
 
export default Notfound;