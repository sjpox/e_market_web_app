import { useEffect, useState } from 'react'
import './App.css'
import MainLayout from './layouts/MainLayout'

function App() {
  const handleClick = () => {
    alert('click')
  }
  
  useEffect(()=> {
    
  }, [])

  function handleClick2() {
    alert('click 2')
  }
  
  const [username, setUsername] = useState<string>("")
  const handleChangeUsername = (event: any) => {
    setUsername(event.target.value);
  }
  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log("event %s", event)
    console.log(event.target.elements.username.value)
  }

  return (
    <MainLayout/>
  )
}

export default App
