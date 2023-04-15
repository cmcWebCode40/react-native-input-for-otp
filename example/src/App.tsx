import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import OTPInput from 'react-native-otp-input-fields';

export default function App() {
  const [code, setCode] = React.useState<string>('');
  const [isOTPReady, setOTPReady] = React.useState(false);

  const cb = React.useCallback((isReady: boolean) => {
    setOTPReady(isReady);
  }, []);

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
        onOtpReady={cb}
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
