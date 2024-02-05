import { useState } from 'react'
import Content from './components/content'
import Header from './components/header'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header/>
    <Content/>
  </div>
  )
}

export default App
