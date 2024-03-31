
const ToDo = ({ data, handleRemove, handleDone, handleMore, showMore }) => {
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
              <button onClick={handleMore}>{showMore ? 'Hide' : 'Show'} details</button>

            </div>
            )
        })}
</>

    )
}

export default ToDo; 