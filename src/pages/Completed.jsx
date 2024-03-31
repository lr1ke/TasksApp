import { Link } from 'react-router-dom';
const Completed = ({ completedTasks, handleFav, favorite }) => {
    return (
        <> 
      <h3>Things I've done already</h3>
      {completedTasks.length === 0 && <p>Empty list</p>}

        {completedTasks.map((item) => {
            return (
            <div key={item.key}>
                       <p>{item.activity} (completed: {item.date})</p>
              <button onClick={handleFav}>{favorite ? 'Favorite' : 'non-Favorite'}</button>
            </div>
            )
        })}
        <Link to="/todo">back</Link> 

        </>
    )
}

export default Completed; 