import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div>
        <h1>404 - Not Found!</h1>
        <Link to="/">Go Home</Link>
    
        <section className='section'>
        <h2>404</h2>
        <p>page not found</p>
        <Link to='/'>back</Link>
        
        
        </section>
        </div>

            )
    

}

export default Error; 