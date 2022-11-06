import { useRef, useState } from "react";
import styles from "./WordBox.module.css";

type WordBoxProps = {
  guessedLetters: {get: string[], set: any}
  wordToGuess: string
  reveal?: boolean
}

function WordBox({ guessedLetters, wordToGuess, reveal = false, }: WordBoxProps) {

  const [getReveals, setReveals] = useState(Math.floor(wordToGuess.length/3));

  const barRefs: {current: HTMLSpanElement[]} = useRef([]);
  barRefs.current = [];
  const addRefs: (el: any) => void = (el) => {if (el) barRefs.current.push(el)}


  const handleReveal = (e: any)=>{

    if (getReveals < 1) return; 

    console.log("start");
    const index = e.target.attributes.getNamedItem('data-spanid').value;
    const slot = barRefs.current[index];
    slot.style.visibility = "visible";

    const val = slot.textContent;
    guessedLetters.set( (prev: string[]) => [...prev, val] );

    setReveals( (prev: number) => prev - 1);
  };

  return (
    <div>
      <div style={WordBoxComponent} >
        {wordToGuess.split("").map((letter, index) => (
          <span className={`${styles.btmbar}`} key={index} data-spanid={index} onClick={handleReveal}>
            <span ref={addRefs}
              style={{ visibility: guessedLetters.get.includes(letter) || reveal ? "visible" : "hidden",
                color: !guessedLetters.get.includes(letter) && reveal ? "red" : "black", }} >
              {letter}
            </span>
          </span>
        ))}
      </div>
      <div style={{textAlign: "center", paddingTop: "1rem"}}>
        {getReveals} Reveal(s) left
        </div>
    </div>
  )
}

const WordBoxComponent = {
  display: "flex",
  gap: ".25em",
  fontSize: "6rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  fontFamily: "monospace",
} as const;

export default WordBox