import { Link } from 'react-router-dom';
const Home = ({ recentData, handleLike, fetchRecentData }) => {
    return (
        <> 
              
          <div className="card">
          <p>Keep Busy. Why not ...</p>
          <h4>{recentData.activity} ?</h4>
          </div>
          <div>
          <button onClick={() => handleLike(recentData)}>Like</button>
          <button onClick={fetchRecentData}>New</button>
          <Link to={`details/${recentData.key}`}>Details</Link>
          </div>
            <br></br>
        </>
    )
}

export default Home; 