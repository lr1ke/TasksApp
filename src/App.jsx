import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, useParams, Link } from 'react-router-dom'

import Home from './pages/Home'
import ToDo from './pages/ToDo' 
import Completed from './pages/Completed'
import Details from './pages/Details'
import Error from './pages/Error'
import SharedLayout from './pages/SharedLayout'


function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([]);
  const [recentData, setRecentData] = useState([]);
  const [showMore, setShowMore] = useState(false); 
  const [completedTasks, setCompletedTasks] = useState([]);
  const [favorite, setFavorite] = useState(false); 




  // Function to fetch recent data from the bored API
  const fetchRecentData = async () => {
    try {
      const response = await fetch('https://www.boredapi.com/api/activity')
      const newData = await response.json()
      setRecentData(newData)
    } catch (error) {
      console.error(error)
    }
  }

  // Call the fetchRecentData function to update recentData
  useEffect(() => {
    fetchRecentData()
  }, [])

  const handleLike = (item) => {
    addStatus(item);
    setData([recentData, ...data]);
    fetchRecentData();
  }


  const handleDone = (taskId) => {
    setData(data.map((task) => {
      if (task.key === taskId) {
            const updatedTask =  {...task, status: !task.status, date: new Date().toLocaleDateString() };
            if(updatedTask.status === true){
              addToCompleted(updatedTask);
            }
            return updatedTask;
      }
      return task;
    }).filter(task => !task.status));
  };

  const addToCompleted = (item) => {
    setCompletedTasks([...completedTasks, item]);
    console.log(completedTasks);
  }

  const handleMore = () => {
    setShowMore(!showMore);
  }

  const handleRemove = (taskId) => { 
    setData(data.filter((task) => task.key !== taskId));
  }

  const addStatus = (item) => {
    return (
      item.status = false
    )
  }

  const handleFav = () => {
    setFavorite(!favorite);
  }


  
  
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout />} >
        <Route index element={<Home recentData={recentData} handleLike={handleLike} fetchRecentData={fetchRecentData} handleMore={handleMore} showMore={showMore}/>} />
        <Route path="todo" element={<ToDo data={data} handleRemove={handleRemove} handleDone={handleDone} handleMore={handleMore} />} />
        <Route path="completed" element={<Completed completedTasks={completedTasks} favorite={favorite} handleFav={handleFav}/>} />
        <Route path="details/:id" element={<Details />} />
        <Route path='*' element={<Error />} />
      </Route> 
    </Routes>
    </>
  )
}

export default App
