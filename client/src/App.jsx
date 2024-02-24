import { useState } from 'react'
import './App.css'

let apiKey =    import.meta.env.VITE_API_KEY;
let backendUrl =import.meta.env.VITE_BACKEND_URL;

function App() {
  const [count, setCount] = useState(0)
  console.log(apiKey);
  return (
    <>
       <h1>hello</h1>
    </>
  )
}

export default App
