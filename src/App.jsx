import { useState, useEffect } from 'react'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// untit testing for react?
import Home from './pages/Home'
import ToDo from './pages/ToDo' 
import Completed from './pages/Completed'
import Details from './pages/Details'
import Error from './pages/Error'
import SharedLayout from './pages/SharedLayout'

function App() {
  const [data, setData] = useState([]);
  const [recentData, setRecentData] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  // const [avatar, setAvatar] = useState('');


  // Function to fetch recent data from the bored API
  const fetchRecentData = async () => {
    try {
      const response = await fetch('https://www.boredapi.com/api/activity')
      const newData = await response.json()
      setRecentData(newData)
      // setAvatar(`https://robohash.org/${newData.activity}?set=set3&size=100x100`)

    } catch (error) {
      console.error(error) // how to handle error ? state data error set to true and display error message
    }
  }


  // Call the fetchRecentData function to update recentData
  useEffect(() => {
    fetchRecentData()
  }, [])

  const handleLike = (item) => {
    addStatus(item);
    setData([recentData, ...data]);
    setShowMessage(true); // Show message when task is marked as done 
    setTimeout(() => {
      setShowMessage(false);
    }, 2000); // Hide message after 2 seconds

    fetchRecentData();
  }

  const addStatus = (item) => {
    return (
      item.status = false
    )
  }

  const handleDone = (taskId) => {
    setData(data.map((task) => {
      if (task.key === taskId) {
            const updatedTask =  {...task, status: !task.status, date: new Date().toLocaleDateString(), fave: false };
            if(updatedTask.status === true){
              addToCompleted(updatedTask);
            }
            setShowMessage(true); // Show message when task is marked as done 
            setTimeout(() => {
              setShowMessage(false);
            }, 2000); // Hide message after 2 seconds
            return updatedTask;
      }
      return task;
    }).filter(task => !task.status)); // Remove task from data array if status is true
  };

  const addToCompleted = (item) => {
    setCompletedTasks([item, ...completedTasks]);
    console.log(completedTasks);
  }

  const handleRemove = (taskId) => { 
    setData(data.filter((task) => task.key !== taskId));
  }

  const handleFave = (taskId) => {
    setCompletedTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.key === taskId) {
          return {
            ...task,
            fave: !task.fave
          };
        }
        return task;
      });
    });
  }
  
  const popUpMessage = ({ message }) => {
    return (
        <div className="popup-message">
            <p>{message}</p>
        </div>
    );
  };
  
  return (
    <>
    <HashRouter>
    <Routes>
      <Route path="/" element={<SharedLayout />} >
        <Route index element={<Home  popUpMessage={popUpMessage} showMessage={showMessage} recentData={recentData} handleLike={handleLike} fetchRecentData={fetchRecentData}/>} />
        <Route path="todo" element={<ToDo recentData={setRecentData} popUpMessage={popUpMessage} showMessage={showMessage} data={data} handleRemove={handleRemove} handleDone={handleDone} />} />
        <Route path="completed" element={<Completed  data={data} completedTasks={completedTasks} handleFave={handleFave} />} />
        <Route path="details/:taskId" element={<Details data={data} recentData={recentData} />} />
        <Route path='*' element={<Error />} />
      </Route> 
    </Routes>
    </HashRouter>    
    </>
  )
}

export default App
