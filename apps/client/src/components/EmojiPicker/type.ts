import { CSSProperties } from 'react';

export type EmojiPickerList = Record<string, string[] | string>;
export type EmojiPickerType = {
  enablePicker: boolean;
  onSelect?: (pickerRecord: EmojiPickerList) => void;
  autoFocus?: boolean;
  pickerWrapperStyles?: CSSProperties;
};
