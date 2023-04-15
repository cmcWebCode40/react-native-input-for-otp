import React from 'react';
import {
  Pressable,
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  PressableProps
} from 'react-native';
import { optBoxStyles } from './styles';

type OtpBoxProps = {
  /**
   *  an array of input box view
   */
  boxes: number[];
  /**
   *  entered ipt code
   */
  code: string;
  /**
   *  maximum lenght of OTP
   */
  maxInputLenght: number;
  /**
   *  a state if the opt box is focused
   */
  isBoxFocused: boolean;
  /**
   *   a function to handle when the box view is pressed
   */
  onPress: () => void;
  /**
   *  custom box view style
   */
  boxStyle?: StyleProp<ViewStyle>;
  /**
   *  custom box text style
   */
  boxTextStyle?: StyleProp<TextStyle>;
  /**
   *  custom box view style when input is focuses
   */
  boxFocusedStyle?: StyleProp<ViewStyle>;
} & PressableProps;

const OtpBox: React.FunctionComponent<OtpBoxProps> = ({
  boxes,
  code,
  maxInputLenght,
  isBoxFocused,
  onPress,
  boxStyle,
  boxTextStyle,
  boxFocusedStyle,
  ...rest
}) => {
  const otpBoxDigit = (_: number, index: number) => {
    const digit = code[index] || '';

    const isCurrentValue = index === code.length;
    const isLastValue = index === maxInputLenght - 1;
    const isCodeComplete = code.length === maxInputLenght;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    const isFocused = isBoxFocused && isValueFocused;

    return (
      <View
        style={[
          optBoxStyles.boxInput,
          isFocused && (boxFocusedStyle || optBoxStyles.focusedBoxInput),
          boxStyle,
        ]}
        key={index}
      >
        <Text
          style={[
            optBoxStyles.boxText,
            isFocused && optBoxStyles.boxTextFocused,
            boxTextStyle,
          ]}
        >
          {digit}
        </Text>
      </View>
    );
  };
  return (
    <Pressable accessibilityHint="Set OTP box to be focused" style={optBoxStyles.boxContainer} onPress={onPress} {...rest} >
      {boxes.map(otpBoxDigit)}
    </Pressable>
  );
};

export default OtpBox;
