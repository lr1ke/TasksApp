import { useParams, Link } from "react-router-dom"

const Details = ({ data, recentData }) => {
    const { taskId } = useParams();

    let taskobj = data.find((task) => task.key === taskId);
    if (taskobj === undefined) {
        taskobj = recentData;}

        return (
        <> 
        
            <div key={taskId} className="todo-item">
                <h1>Task Details</h1><br></br>
                <div className='wrapper'>

                <h4 >{taskobj.activity}</h4>
                <ul>
                    <li>Type: {taskobj.type}</li>
                    <li>Accessibility: {taskobj.accessibility}</li>
                    <li>Participants: {taskobj.participants}</li>
                    <li>Price: {taskobj.price}</li>
                </ul>
                </div>
            </div>
            <button>{taskobj === recentData ? <Link to="/">back</Link> : <Link to="/todo">back</Link> }</button>


      

        </>
    )
}

export default Details; 