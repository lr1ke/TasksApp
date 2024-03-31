import { Link } from 'react-router-dom';

const ToDo = ({ data, handleRemove, handleDone }) => {
    return (
<>
        <h1>My To Do List</h1>
        {data.length === 0 && <p className='wrapper'>Empty list</p>}
        {data.map((item) => {
            return (
            <div key={item.key} >
                <div className='wrapper'>
                    <h4>{item.activity}</h4>
              
              <button onClick={() => handleRemove(item.key)}>X</button>
              <button onClick={() => handleDone(item.key)}>
               {item.status ? 'Done' : 'To Do'}
              </button>
              <button><Link to={`/details/${item.key}`}>Details</Link></button>
            </div> 
            </div>
            
            
            
            )
        })}
</>
    )
}

export default ToDo; 