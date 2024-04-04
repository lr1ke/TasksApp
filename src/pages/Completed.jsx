import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'

const Completed = ({ completedTasks, handleFave }) => {
    return (
        <> 

        <h1 >Completed Tasks</h1>
        {completedTasks.length === 0 && <p>Empty list</p>}

        {completedTasks.map((item) => {
            return (
            <div className='todo-item' key={item.key} >
                <div className='wrapper'>
                     <h5 >{item.activity}</h5>
                        <p>completed: {item.date}</p>
                        <p>Rating:<button onClick={() => handleFave(item.key)}>{ item.fave ? <FontAwesomeIcon icon={faHeart} />:<FontAwesomeIcon icon={faHeartBroken} />}</button> </p> 
                </div> 
            </div>
            )
        })}
        <br></br>
        <button><Link to="/todo">back</Link></button>
        </>
    )
}

export default Completed; 