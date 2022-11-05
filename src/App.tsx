import { useState } from "react"
import words from "./assets/words.json"

let DEBUG = true;

function App() {
  const [getWord, setWord] = useState(() => words[Math.floor(Math.random() * words.length)]);

  if(DEBUG) console.log(getWord);

  return (
    <h1>test run</h1>
  )
}

export default App
