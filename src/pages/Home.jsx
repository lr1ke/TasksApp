import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faRotateRight, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
const Home = ({ avatar, showMessage, popUpMessage, recentData, handleLike, fetchRecentData }) => {
    return (
        <> <br></br>
          <h1 className="log">Keep Busy</h1>
                    <div className="logo-container"><br></br>
                    <img src={avatar} className="logo" alt="Robohash" />

          <img src={`https://robohash.org/${recentData.activity}?set=set3&size=100x100`} className="logo-alt" alt="Robohash" />
          </div>

          <div className="wrapper1">
          {/* <h6>Why not...</h6><br></br> */}

          <h4>{recentData.activity}</h4>

          </div>

          
          <div class="btn-home">
          <button><Link to={`details/${recentData.key}`}><FontAwesomeIcon icon={faEllipsisH} /></Link></button>
          <button onClick={() => handleLike(recentData)}><FontAwesomeIcon icon={faHeart} className='transparent-icon'/></button>
          <button onClick={fetchRecentData}><FontAwesomeIcon icon={faRotateRight} /></button>
          </div>
            <br></br>
            {showMessage && popUpMessage({ message: 'Moved to ToDo' })}
        </>
    )
}

export default Home; 