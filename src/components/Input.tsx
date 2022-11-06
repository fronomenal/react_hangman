import styles from "./Input.module.css";

const KEYS = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

type InputProps = {
  disabled?: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}


function Input({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: InputProps) {
  return (
    <div style={Keyboard} >
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <button onClick={() => addGuessedLetter(key)}
            className = {`${styles.btn} ${isActive ? styles.active : ""} ${ isInactive ? styles.inactive : "" }`}
            disabled={isInactive || isActive || disabled}
            key={key} >
            {key}
          </button>
        )
      })}
    </div>
  )
}

const Keyboard = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
  gap: ".5rem", 
  alignSelf: "stretch"} as const;

export default Input