import { Link } from 'react-router-dom';
const Completed = ({ completedTasks, handleFav, favorite }) => {
    return (
        <> 
      <h1>Completed Task List</h1>
      {completedTasks.length === 0 && <p>Empty list</p>}

        {completedTasks.map((item) => {
            return (
            <div className='wrapper' key={item.key}>
                     <span> <p >{item.activity} 
                 (completed: {item.date})</p>
              <button onClick={handleFav}>{favorite ? 'Favorite' : 'non-Favorite'}</button></span> 
            </div>
            )
        })}
        <br>
    </br>
        <Link to="/todo">back</Link> 

        </>
    )
}

export default Completed; 