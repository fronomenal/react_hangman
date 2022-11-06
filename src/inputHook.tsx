import { useCallback, useEffect } from "react"


export default function useInput({getGuessed, setGuessed}: any, fin : boolean) {

  const makeGuess = useCallback(
    (guess: string ) => {
      if (fin) return window.alert("Please Refresh")
      if (getGuessed.includes(guess)) return;
  
      setGuessed( (prev: string[]) => [...prev, guess]);
    },
    [getGuessed, fin],
  );
  

  useEffect( () => {
    const handler = (ke: KeyboardEvent) => {

      const key = ke.key;

      if (key.match(/\W/)) return;

      ke.preventDefault();

      makeGuess(key);

    }

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    }
  } , [getGuessed]);

  return makeGuess;

};
