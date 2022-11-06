import { useCallback, useEffect } from "react"


export default function useInput({getGuessed, setGuessed}: any) {

  const makeGuess = useCallback(
    (guess: string ) => {
      console.log(getGuessed)
      if (getGuessed.includes(guess)) return
  
      setGuessed( (prev: string[]) => [...prev, guess]);
    },
    [getGuessed],
  );
  

  useEffect( () => {
    const handler = (ke: KeyboardEvent) => {

      const key = ke.key;

      if (key.match(/\W/)) return;

      console.log("works");

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
