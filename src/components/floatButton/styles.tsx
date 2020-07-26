import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  button_container: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 10
  },
  button_background: {
    width: 65,
    height: 65,
    shadowColor: "#2FFF9D",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
    borderRadius: 50
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }
});

export default style;
