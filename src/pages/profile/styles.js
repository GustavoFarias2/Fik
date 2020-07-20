import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon_container: {
    backgroundColor: '#1e1e1e',
    marginBottom: -5
  },
  menu_icon: {
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  profile_container: {
    flex: 2,
    backgroundColor: '#1e1e1e'
  },
  photo_and_counts_container: {
    flex: 3,
    flexDirection: 'row'
  },
  photo_container: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  photo: {
    borderRadius: 50,
    width: 90,
    height: 90,
    backgroundColor: '#fff'
  },
  count_container: {
    flex: 7,
    flexDirection: 'row'
  },
  count: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  count_button: {

  },
  count_number: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Montserrat_700Bold'
  },
  count_text: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Montserrat_400Regular'
  },
  info_container: {
    flex: 2,
    padding: 20
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff'
  },
  description: {
    fontSize: 14,
    color: '#fff'
  },
  histories_and_characters: {
    flex: 3,
    backgroundColor: '#121212'
  }
});

export default styles;
