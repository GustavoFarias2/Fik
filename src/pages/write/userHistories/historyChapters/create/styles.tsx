import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e'
  },
  scroll: {
    flex: 1,
    padding: 25,
    paddingVertical: 0
  },
  label: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Montserrat_400Regular',
    marginVertical: 7
  },
  input: {
    backgroundColor: '#171717',
    borderColor: '#fff',
    paddingHorizontal: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderRadius: 0,
    color: '#fff'
  },
  input_description: {
    textAlignVertical: 'top',
    height: 120,
  },
  input_text: {
    textAlignVertical: 'top',
    height: 200
  }
});

export default styles;
