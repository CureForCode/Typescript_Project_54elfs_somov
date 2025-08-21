import { useState } from "react";

import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Counter from "components/Counter/Counter";
import Feedback from "components/Feedback/Feedback";

import { PageWrapper, ElementControl, Text } from "./styles";
import { generateNumber } from "./data";

function Homework_08() {
  // генерация числа только один раз при первом рендере
  const [generatedValue] = useState(generateNumber);

  // стэйт для Counter
  const [count, setCount] = useState<number>(0);

  // стэйт для Feedback
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const handleResetFeedback = () => {
    setLike(0);
    setDislike(0);
  };

  return (
    <PageWrapper>
      {/* Buttons */}
      <ElementControl>
        <Button name="Simple Button" />
      </ElementControl>
      <ElementControl>
        <Button isRed name="Delete Button" />
      </ElementControl>
      <ElementControl>
        <Button disabled name="Disabled Button" />
      </ElementControl>
      {/* Inputs */}
      <ElementControl>
        <Input
          id="simple_input"
          name="simple"
          placeholder="Simple input element"
          label="Simple Input"
        />
      </ElementControl>
      <ElementControl>
        <Input
          id="error_input"
          name="error"
          placeholder="Error input element"
          label="Error Input"
          error="Some Network Error"
        />
      </ElementControl>
      <ElementControl>
        <Input
          id="disabled_input"
          name="disabled"
          placeholder="Disabled input element"
          label="Disabled Input"
          disabled
        />
      </ElementControl>
      {/* Counter */}
      <Text>Counter value: {count}</Text>
      <ElementControl>
        <Counter
          count={count}
          onPlus={() => setCount((prev) => prev + 1)}
          onMinus={() => setCount((prev) => prev - 1)}
        />
      </ElementControl>
      {/* Feedback */}
      <ElementControl>
        <Feedback
          like={like}
          dislike={dislike}
          onLike={() => setLike((prev) => prev + 1)}
          onDislike={() => setDislike((prev) => prev + 1)}
          resetResults={handleResetFeedback}
        />
      </ElementControl>
      {/* Generated number */}
      <Text>Сгенерированное число: {generatedValue}</Text>
    </PageWrapper>
  );
}

export default Homework_08;
