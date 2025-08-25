import { useEffect, useState } from "react";
import {
  PageWrapper,
  Card,
  SetupText,
  PunchlineText,
  Meta,
  ButtonRow,
  Button,
} from "./styles";

type Joke = {
  id: number;
  type: string;
  setup: string;
  punchline: string;
};

function Homework_09() {
  const JOKE_URL: string = "https://official-joke-api.appspot.com/random_joke";

  const [joke, setJoke] = useState<Joke | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const getJoke = async () => {
    const response = await fetch(JOKE_URL, { method: "GET" });
    const result = await response.json();
    console.log(result);
    if (response.ok) {
      setJoke(result);
      setError(undefined);
    } else {
      setJoke(undefined);
      setError("Some Network Error");
    }
  };

  // MOUNTING
  useEffect(() => {
    getJoke();
  }, []);

  let content;
  if (error) {
    content = <PunchlineText>Some Network Error</PunchlineText>;
  } else if (joke) {
    content = (
      <>
        <SetupText>{joke.setup}</SetupText>
        <PunchlineText>🙂 {joke.punchline}</PunchlineText>
        <Meta>
          {" "}
          {/*Meta отображает дополнительную информацию о шутке (тип и ID из API). Для лучшего отслеживания ошибок.*/}
          Type: {joke.type} · ID: {joke.id}
        </Meta>
      </>
    );
  } else {
    content = <PunchlineText>Loading…</PunchlineText>;
  }

  return (
    <PageWrapper>
      <Card>
        {content}
        <ButtonRow>
          <Button onClick={getJoke}>Get another joke</Button>
        </ButtonRow>
      </Card>
    </PageWrapper>
  );
}

export default Homework_09;
