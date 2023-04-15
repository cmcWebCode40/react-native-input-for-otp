import { StyleSheet } from "react-native";

export const optBoxStyles = StyleSheet.create({
    focusedBoxInput: {
      borderColor: 'blue',
    },
    boxInput: {
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      height: 54,
      minWidth: 50,
      justifyContent: "center",
      alignItems: "center",
    },
    boxText: {
      fontSize: 18,
    },
    boxTextFocused: {
      color: 'blue',
    },
    boxContainer: {
      width: "80%",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
  });

export const otpInputStyles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    textInputHidden: {
      borderColor: '#f4f4f4',
      borderWidth: 1,
      borderRadius:4,
      padding: 15,
      marginTop: 50,
      color:'#fff',
      position: "absolute",
      opacity: 0,
    },
  });
