import { Link } from 'react-router-dom';
const Home = ({ recentData, handleLike, fetchRecentData }) => {
    return (
        <> 
              
          <div >
          <h1>Keep Busy
          </h1><br></br>
          <div className="wrapper">

          <h6>Why not...</h6><br></br>
          <h4>{recentData.activity}?</h4>
          </div>
          </div>
          <br></br>
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