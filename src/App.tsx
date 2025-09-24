import { useState } from 'react'
// import PixelTrail from "@/components/fancy/background/pixel-trail"
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
        {/* <PixelTrail
          pixelSize={16}
          fadeDuration={500}
          delay={50}
          pixelClassName="bg-black"
        /> */}
    </>
  )
}

export default App
