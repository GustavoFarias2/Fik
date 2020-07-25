import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loading_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: '#000'
  },
  container_padding: {
    padding: 25
  },
  chapter_name: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 15,
    color: '#fff'
  },
  chapter_text: {
    fontSize: 18,
    fontFamily: 'Montserrat_400Regular',
    color: '#fff'
  }
});

export default styles;
