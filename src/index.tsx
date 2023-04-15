import React, {
  Dispatch,
  useEffect,
  useRef,
  useState,
  SetStateAction,
} from 'react';
import { View, TextInput, ViewProps } from 'react-native';
import OtpBox from './OtpBox';
import { otpInputStyles } from './styles';

type OTPInputProps = {
  /**
   *  length of OTP code
   */
  maxInputLenght: number;
  /**
   *  call back to trigger when  total numnber OTP code  has been completely entered
   */
  onOtpReady: (isReady: boolean) => void;
  /**
   *  OPT code
   */
  code: string;
  /**
   *  state dispatch  function to set code
   */
  onSetCode: Dispatch<SetStateAction<string>>;
} & Pick<
  React.ComponentPropsWithRef<typeof OtpBox>,
  'boxFocusedStyle' | 'boxStyle' | 'boxTextStyle'
> &
  ViewProps;

const OTPInput: React.FunctionComponent<OTPInputProps> = ({
  maxInputLenght,
  onOtpReady,
  code,
  onSetCode,
  boxFocusedStyle,
  boxStyle,
  boxTextStyle,
  ...rest
}) => {
  const otpBoxes = new Array(maxInputLenght).fill(0);
  const inputRef = useRef<TextInput | null>(null);
  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  useEffect(() => {
    // update pin ready status

    onOtpReady(code.length === maxInputLenght);
    // clean up function

    return () => {
      onOtpReady(false);
    };
  }, [code, maxInputLenght, onOtpReady]);

  return (
    <View style={otpInputStyles.container} {...rest}>
      <OtpBox
        boxes={otpBoxes}
        code={code}
        isBoxFocused={isInputBoxFocused}
        maxInputLenght={maxInputLenght}
        onPress={handleOnPress}
        boxFocusedStyle={boxFocusedStyle}
        boxStyle={boxStyle}
        boxTextStyle={boxTextStyle}
      />
      <TextInput
        value={code}
        style={otpInputStyles.textInputHidden}
        keyboardType="number-pad"
        onChangeText={onSetCode}
        maxLength={maxInputLenght}
        ref={inputRef}
        onBlur={handleOnBlur}
        placeholder="OTP Input"
      />
    </View>
  );
};

export default OTPInput;
