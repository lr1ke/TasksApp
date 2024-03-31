import { useParams, Link } from "react-router-dom"

const Details = ({ data, recentData }) => {
    const { taskId } = useParams();

    let taskobj = data.find((task) => task.key === taskId);
    if (taskobj === undefined) {
        taskobj = recentData;}

        return (
        <> 
        
            <div key={taskId}>
                <h3>Task Details</h3>
                <p>{taskobj.activity}</p>

                <ul>
                    <li>Type: {taskobj.type}</li>
                    <li>Accessibility: {taskobj.accessibility}</li>
                    <li>Participants: {taskobj.participants}</li>
                    <li>Price: {taskobj.price}</li>
                </ul>
            </div>
            {taskobj === recentData ? <Link to="/">back</Link> : <Link to="/todo">back</Link> }


      

        </>
    )
}

export default Details; 