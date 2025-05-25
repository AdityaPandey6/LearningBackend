import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [Jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes').then((response)=>{
      setJokes(response.data)
    }).catch((error)=>{
      console.error("Error fetching jokes:", error)
    })
  } , [])

  return (
    <>
     <h1>Full Stack Learning</h1>
     <p>Jokes: {Jokes.length}</p>
     {
      Jokes.map((joke)=>(
          <div key={joke.id}>
            <h2>{joke.id}</h2>
            <p>{joke.joke}</p>
          </div>      
      ))
     }
    </>
  )
}

export default App
