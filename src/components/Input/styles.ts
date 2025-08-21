import styled from "@emotion/styled";

interface InputComponentProps {
  $hasError?: boolean;
  disabled?: boolean;
}

const getBorderColor = ({ $hasError, disabled }: InputComponentProps) => {
  if (disabled) {
    return "#d1d5db";
  } else if ($hasError) {
    return "#ef4444";
  } else {
    return "#3f3f3f";
  }
};

const getBackground = ({ disabled }: InputComponentProps) => {
  if (disabled) {
    return "#f3f4f6";
  } else {
    return "#ffffff";
  }
};

const getColor = ({ disabled }: InputComponentProps) => {
  if (disabled) {
    return "#6b7280";
  } else {
    return "#111827";
  }
};

const getCursor = ({ disabled }: InputComponentProps) => {
  if (disabled) {
    return "not-allowed";
  } else {
    return "text";
  }
};

const getFocusBorderColor = ({ $hasError, disabled }: InputComponentProps) => {
  if (disabled) {
    return "#d1d5db";
  } else if ($hasError) {
    return "#dc2626";
  } else {
    return "#2563eb";
  }
};

const getFocusBoxShadow = ({ $hasError, disabled }: InputComponentProps) => {
  if (disabled) {
    return "transparent";
  } else if ($hasError) {
    return "rgba(239,68,68,0.15)";
  } else {
    return "rgba(37,99,235,0.15)";
  }
};

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

  border: 1px solid ${getBorderColor};
  background: ${getBackground};
  color: ${getColor};
  cursor: ${getCursor};

  &::placeholder {
    color: #6f6f6f;
    font-size: 16px;
  }

  &:focus {
    border-color: ${getFocusBorderColor};
    box-shadow: 0 0 0 3px ${getFocusBoxShadow};
    outline: none;
  }
`;

export const ErrorText = styled.span`
  font-size: 14px;
  color: #ef4444;
`;
