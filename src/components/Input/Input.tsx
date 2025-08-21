import { type InputProps } from "./types";
import { InputWrapper, InputLabel, InputComponent, ErrorText } from "./styles";

function Input({
  id,
  name,
  label,
  type = "text",
  placeholder,
  disabled,
  error,
}: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputComponent
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        $hasError={error ? true : false}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
}

export default Input;
