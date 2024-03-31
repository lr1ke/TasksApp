import { Link } from 'react-router-dom';
const ToDo = ({ data, handleRemove, handleDone }) => {
    return (
<>
        <h3>My To Do List</h3>
        {data.length === 0 && <p>Empty list</p>}

        {data.map((item) => {
            return (
            <div key={item.key}>
              <p>{item.activity}</p>
             
              <br></br>
       
              <button onClick={() => handleRemove(item.key)}>X</button>
              <button onClick={() => handleDone(item.key)}>
               {item.status ? 'Done' : 'To Do'}
              </button>
              <button><Link to={`/details/${item.key}`}>Details</Link></button>
            </div>
            )
        })}

</>

    )
}

export default ToDo; 