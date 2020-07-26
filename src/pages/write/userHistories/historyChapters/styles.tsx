import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loading_container: {
    flex: 1,
    backgroundColor: '#1e1e1e'
  },
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  chapters_container: {
    flex: 1,
    paddingVertical: 5,
  },
  chapter_name: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Montserrat_400Regular',
    paddingBottom: 20,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#414141'
  }
});

export default styles;
