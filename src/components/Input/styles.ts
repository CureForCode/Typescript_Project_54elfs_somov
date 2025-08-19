import styled from "@emotion/styled";

interface InputComponentProps {
  $hasError?: boolean;
  disabled?: boolean;
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;

export const InputComponent = styled.input<InputComponentProps>`
  width: 100%;
  height: 50px;
  padding: 12px;
  border-radius: 4px;

  border: 1px solid
    ${({ $hasError, disabled }) =>
      disabled ? "#d1d5db" : $hasError ? "#ef4444" : "#3f3f3f"};

  background: ${({ disabled }) => (disabled ? "#f3f4f6" : "#ffffff")};
  color: ${({ disabled }) => (disabled ? "#6b7280" : "#111827")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};

  &::placeholder {
    color: #6f6f6f;
    font-size: 16px;
  }

  &:focus {
    border-color: ${({ $hasError, disabled }) =>
      disabled ? "#d1d5db" : $hasError ? "#dc2626" : "#2563eb"};
    box-shadow: 0 0 0 3px
      ${({ $hasError, disabled }) =>
        disabled
          ? "transparent"
          : $hasError
          ? "rgba(239,68,68,0.15)"
          : "rgba(37,99,235,0.15)"};
    outline: none;
  }
`;

export const ErrorText = styled.span`
  font-size: 14px;
  color: #ef4444;
`;
