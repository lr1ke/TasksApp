
const Home = ({ recentData, handleLike, fetchRecentData, handleMore, showMore }) => {
    return (
        <> 
              
          <div className="card">
          <p>Keep Busy. Why not ...</p>
          <h4>{recentData.activity} ?</h4>
          {showMore && <ul>
          <li>Accessibility: {recentData.accessibility}</li>
          <li>Type: {recentData.type}</li>
          <li>Participants: {recentData.participants}</li>
          <li>Price: {recentData.price}</li>
          </ul>}
          </div>
          <div>
          <button onClick={() => handleLike(recentData)}>Like</button>
          <button onClick={fetchRecentData}>New</button>
          <button onClick={handleMore}>{showMore ? 'Hide' : 'Show'} details</button>
          </div>
            <br></br>
        </>
    )
}

export default Home; 