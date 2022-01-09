export type InputType = {
  label: string;
  type: string;
  name: string;
  visualType: "short" | "long";
  readonly?: boolean;
  errorText?: string;
  isValid?: boolean;
  inputValue?: string;
  events?: any;
};
