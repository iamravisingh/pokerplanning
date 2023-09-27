
export type CardPickerType<ButtonProps> = {
    handleClick?: () => void;
    value: string | number;
    buttonProps?: ButtonProps;
    classes?: string;
  };