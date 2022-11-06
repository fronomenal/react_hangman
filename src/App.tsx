import { useState } from "react"
import words from "./assets/words.json"
import HangMan from "./components/HangMan";
import Input from "./components/Input";
import WordBox from "./components/WordBox";
import useInput from "./inputHook";

let DEBUG = true;


function App() {
  const [getWord, setWord] = useState<string>(() => words[Math.floor(Math.random() * words.length)]);

  if(DEBUG) console.log(getWord);

  const [getGuessed, setGuessed] = useState<string[]>([]);

  const wrongs = getGuessed.filter( letter => !getWord.includes(letter) );

  const guess = useInput({getGuessed, setGuessed});

  return (
    <div style={AppComponent}>
      <div style={MessageDiv}> Win | Lose</div>
      <HangMan guessNum={wrongs.length}></HangMan>
      <WordBox guessedLetters={getGuessed} wordToGuess={getWord}></WordBox>
      <Input activeLetters={getGuessed.filter(letter =>
            getWord.includes(letter)
          )}
          inactiveLetters={wrongs}
          addGuessedLetter={guess}></Input>
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
