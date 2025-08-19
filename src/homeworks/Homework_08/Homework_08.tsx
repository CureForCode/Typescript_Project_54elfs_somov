import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { PageWrapper, Paragraph, ButtonControl, InputControl } from "./styles";

function Homework_08() {
  return (
    <PageWrapper>
      <Paragraph>Homework 08: Emotion</Paragraph>
      {/* Buttons */}
      <ButtonControl>
        <Button name="Default Button" />
      </ButtonControl>
      <ButtonControl>
        <Button isRed name="Red Button" />
      </ButtonControl>
      <ButtonControl>
        <Button disabled name="Disabled Button" />
      </ButtonControl>
      <ButtonControl>
        <Button isRed disabled name="Red Disabled" />
      </ButtonControl>
      {/* Inputs */}
      <InputControl>
        <Input
          id="input1"
          name="input1"
          label="Normal"
          placeholder="Type here..."
        />
      </InputControl>
      <InputControl>
        <Input
          id="input2"
          name="input2"
          label="Disabled"
          placeholder="Can't type here"
          disabled
        />
      </InputControl>
      <InputControl>
        <Input
          id="input3"
          name="input3"
          label="With error"
          placeholder="Type here..."
          error="Some error"
        />
      </InputControl>
    </PageWrapper>
  );
}

export default Homework_08;
