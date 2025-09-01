import type { ChangeEvent, FocusEvent } from "react";

export interface InputProps {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  label: string;
  error?: string | undefined;
  disabled?: boolean;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}
