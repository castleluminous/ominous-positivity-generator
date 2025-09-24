import { useState } from 'react'
import QuoteList from './Quotes.tsx'
import './App.css'

function App() {
  const [selectedQuote, setSelectedQuote] = useState<String>(">:)")
  
  function pickQuote() {
    const number = Math.floor(Math.random() * QuoteList.length);
    setSelectedQuote(QuoteList[number]);
  }

  return (
    <>
      <h2>Ominous Positivity</h2>
      <h1>{selectedQuote}</h1>
      <button onClick={pickQuote}>gimme words</button>
    </>
  )
}

export default App
