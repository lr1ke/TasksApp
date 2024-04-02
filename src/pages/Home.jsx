import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faRotateRight, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

const Home = ({ showMessage, popUpMessage, recentData, handleLike, fetchRecentData }) => {
    return (
        <> 
          {/* <img src={viteLogo} className="logo react" alt="React logo" />
          <img src={reactLogo} className="logo react" alt="React logo" /> */}

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