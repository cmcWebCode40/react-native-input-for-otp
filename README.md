# react-native-otp-input-fields

react-native-otp-input-fields

A Light weight simple and flexible react native opt input

> experimental needs to be improved.

## Installation

```sh
# npm 
npm install react-native-otp-input-fields

# yarn 

yarn add  install react-native-otp-input-fields

```


## Usage

```js
import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import OTPInput from 'react-native-otp-input-fields';

export default function App() {
  const [code, setCode] = React.useState < string > '';
  const [isOTPReady, setOTPReady] = React.useState(false);

  React.useEffect(() => {
    if (isOTPReady) {
      console.log('OPT completely entered');
    }
  }, [isOTPReady]);

  return (
    <View style={styles.container}>
      <OTPInput
        code={code}
        maxInputLenght={4}
        onOtpReady={callback}
        onSetCode={setCode}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

### Props

1. `vda-account`

| Props           | Type         | Required | Description                       |
| --------------- | ------------ | -------- | --------------------------------- |
| maxInputLenght  | number       | true     |
| onOtpReady      | function     | true     | a Hexa-decimal color e.g (#0000)  |
| code            | string       | true     | otp code state                    |
| onSetCode       | function     | true     | function to update opt code state |
| boxFocusedStyle | style object | false    | custom box focused style          |
| boxStyle        | style object | false    | box style                         |
| boxTextStyle    | style object | false    | box text style                    |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
