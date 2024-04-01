import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken, faRotateRight, faInfoCircle, faEllipsisH, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const Home = ({ recentData, handleLike, fetchRecentData }) => {
    return (
        <> 
              
          <div >
          <h1>Keep Busy
          </h1><br></br>
          <div className="wrapper">

          <h6>Why not...</h6><br></br>
          <h4>{recentData.activity}? </h4>

          </div>
          </div>
          <div>
  

         <br></br>
          {/* <button onClick={() => handleLike(recentData)}><img src="https://thenounproject.com/icon/love-4375983/" alt="Like" /></button> */}
          <button><Link to={`details/${recentData.key}`}><FontAwesomeIcon icon={faEllipsisH} /></Link></button>

          <button onClick={() => handleLike(recentData)}><FontAwesomeIcon icon={faHeart} className='transparent-icon'/></button>
          <button onClick={fetchRecentData}><FontAwesomeIcon icon={faRotateRight} /></button>
          </div>
            <br></br>
        </>
    )
}

export default Home; 