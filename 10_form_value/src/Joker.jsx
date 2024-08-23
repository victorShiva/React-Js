import { useEffect, useState } from "react";

export default function Joker() {
  let [joke, setJoke] = useState({});
  const API_URL = "https://official-joke-api.appspot.com/random_joke";

  let getNewJoke = async () => {
    let response = await fetch(API_URL);
    let result = await response.json();
    console.log(result);
    setJoke({ setup: result.setup, punchline: result.punchline });
  };

  useEffect(() => {
    async function getNewJoke() {
      let response = await fetch(API_URL);
      let result = await response.json();
      setJoke({ setup: result.setup, punchline: result.punchline });
      return result;
    }
    getNewJoke();
  }, []);

  return (
    <div>
      <h2>Joker !</h2>
      <h3>{joke.setup}</h3>
      <p>{joke.punchline}</p>
      <button onClick={getNewJoke}>Get-Joke</button>
    </div>
  );
}
