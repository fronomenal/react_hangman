import { useState } from "react"
import words from "./assets/words.json"
import HangMan from "./components/HangMan";
import Input from "./components/Input";
import WordBox from "./components/WordBox";

let DEBUG = true;


function App() {
  const [getWord, setWord] = useState<string>(() => words[Math.floor(Math.random() * words.length)]);

  if(DEBUG) console.log(getWord);

  const [getGuessed, setGuessed] = useState<string[]>([]);

  return (
    <div style={AppComponent}>
      <div style={MessageDiv}> Win | Lose</div>
      <HangMan></HangMan>
      <WordBox></WordBox>
      <Input></Input>
    </div>
  )
}

const AppComponent = {
  maxWidth: "800px",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  margin: "0 auto",
  alignItems: "center",
} as const;

const MessageDiv = {fontSize: "2rem", textAlign: "center"} as const;

export default App
