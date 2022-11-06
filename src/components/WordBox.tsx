type WordBoxProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
}

function WordBox({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: WordBoxProps) {
  return (
    <div style={WordBoxComponent} >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{ visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
              color: !guessedLetters.includes(letter) && reveal ? "red" : "black", }} >
            {letter}
          </span>
        </span>
      ))}
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