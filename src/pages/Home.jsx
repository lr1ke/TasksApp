import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faRotateRight, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
import crocodile  from '../assets/crocodile.jpeg'
const Home = ({ showMessage, popUpMessage, recentData, handleLike, fetchRecentData }) => {
    return (
        <> 
        <h1>Keep Busy</h1>
         <img  className=" avatar" src={crocodile}  alt="Crocodile" />                     
          <div className="wrapper1">
            <div className="header">
            {/* <img src={avatar} className="logo avatar" alt="Robohash" /> */}
            <h6>Why not...</h6><br></br>

            </div>
          <h3>{recentData.activity} ?</h3>

          </div>
          <div class="btn-home"><br></br>
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