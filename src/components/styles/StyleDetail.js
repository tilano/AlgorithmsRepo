import {StyleSheet} from 'react-native';
export const stylesDetailP = StyleSheet.create({
  containerText: {
    paddingTop: 20
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  titleText: {
    fontSize: 22,
    marginBottom: 15,
    color: 'black'
  },
  text: {
    fontSize: 15,
    marginBottom: 15,
    color: 'red'
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewLoading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200
  }
});
