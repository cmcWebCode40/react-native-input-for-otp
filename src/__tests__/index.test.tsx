import renderer from 'react-test-renderer';
import React from 'react';
import OTPInput from '../index';

describe('test for OTP input', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const defaultProps = {
    maxInputLenght: 4,
    code: '',
    onOtpReady: jest.fn(),
    onInputFocus: jest.fn(),
    onSetCode: jest.fn(),
  };

  test.skip('Should OTP input render correctly', () => {
    const componentTree = renderer
      .create(<OTPInput {...defaultProps} />)
      .toJSON();
    expect(componentTree?.children?.length).toBe(2);
    expect(componentTree?.children[1].type).toBe('TextInput');
    expect(componentTree?.children[1].props.maxLength).toBe(
      defaultProps.maxInputLenght
    );
  });
});
