import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 25
  },
  title: {
    fontSize: 32,
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 5
  },
  description: {
    fontSize: 22,
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 25
  },
  chapters: {
    fontSize: 24,
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 10
  },
  chapters_container: {
    borderWidth: 0,
    borderTopWidth: 1,
    borderColor: '#1e1e1e',
    paddingTop: 10
  },
  chapter_container: {
    marginBottom: 4
  },
  chapter_name: {
    fontSize: 18,
    fontFamily: 'Montserrat_400Regular'
  }
});

export default styles;
