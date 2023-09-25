import { useEffect, useState, FC, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { defaultWrapperStyles } from './constant';
import { EmojiPickerType, EmojiPickerList } from './type';

export const EmojiPicker: FC<EmojiPickerType> = (props) => {
  const { enablePicker, onSelect, pickerWrapperStyles, ...otherProps } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (enablePicker) {
      setShow(true);
    }
  }, [enablePicker]);

  const handleSelect = (event: EmojiPickerList) => {
    console.log('event inside emoji picker >>>>>>', event);
    onSelect?.(event);
    setShow(false);
  };

  const handleClickOutside = () => {
    setShow(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ ...pickerWrapperStyles }}
    >
      {show && (
        <div>
          <Picker
            data={data}
            onEmojiSelect={handleSelect}
            navPosition="top"
            onClickOutside={handleClickOutside}
            {...otherProps}
          />
        </div>
      )}
    </motion.div>
  );
};

EmojiPicker.defaultProps = {
  autoFocus: false,
  pickerWrapperStyles: defaultWrapperStyles as CSSProperties,
};
