import {Dimensions} from 'react-native';
const {height: HEIGHT} = Dimensions.get('window');

export default {
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 9,
    paddingVertical: 9,
    elevation: 4,
    borderRadius: 9,
    marginBottom: 12,
    paddingRight: 20,
    height: HEIGHT / 3.5,
    position: 'relative',
  },
  listContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 12,
    overflow: 'hidden',
    resizeMode: 'contain',
  },
  flexColumn: {
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  value: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  textItems: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  removeItem: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#FFC93C',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 40,
    borderRadius: 3,
  },
  removeItemText: {
    fontFamily: 'Poppins-Regular',
  },
};
