import { render } from '@testing-library/react-native';
import OtpBox from '../OtpBox';
import React from 'react';

describe('Test for OTP boxes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const defaultProps = {
    maxInputLenght: 4,
    code: '',
    isBoxFocused: true,
    boxes: [1, 2, 3, 4],
    onPress: jest.fn(),
  };

  test('Should OTP box render correctly', () => {
    const { root } = render(<OtpBox {...defaultProps} />);
    expect(root._fiber.stateNode.children.length).toBe(
      defaultProps.maxInputLenght
    );
  });
});
