import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHeart, faCheck, faHeartBroken, faRotateRight, faInfoCircle, faEllipsisH, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ToDo = ({ data, handleRemove, handleDone, showMessage, popUpMessage }) => {
    return (
<>
        <h1>My To Do List</h1>
        {data.length === 0 && <p className='wrapper'>Empty list</p>}
        {data.map((item) => {
            return (
            <div key={item.key} className='todo-item' >
                <div className='wrapper'>
                    <h4>{item.activity}</h4>
              <button onClick={() => handleDone(item.key)}><FontAwesomeIcon icon={faCheck} className='transparent-icon' />
               {/* {item.status ? 'Done' : 'To Do'} */}
              </button>
              <button ><Link to={`/details/${item.key}`}><FontAwesomeIcon icon={faEllipsisH} /></Link></button>
              <button onClick={() => handleRemove(item.key)}><FontAwesomeIcon icon={faTrashAlt} /></button>

            </div> 
             </div>
            )
        })}
        {showMessage && popUpMessage({ message: 'Sent to Completed List' })}
</>
    )
}

export default ToDo; 