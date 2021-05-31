/* eslint-disable prettier/prettier */
import {Dimensions} from 'react-native';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');
const containerPadding = 10;

export default {
  container: {
    flex: 1,
    flexDirection: 'row',
    width: WIDTH,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: containerPadding,
    backgroundColor: '#F7F7F7',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: HEIGHT * 0.6,
  },
  addToCart: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#8D92A3',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    height: 45,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  addToCartText: {
    fontSize: 16,
    fontFamily: 'ComicNeue-Bold',
    color: '#FFF',
  },
  productCard: {
    width: WIDTH / 2 - (containerPadding + 5),
    height: HEIGHT / 2.5,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#FFF',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '40%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    resizeMode: 'contain',
  },
  contentText: {
    margin: 12,
  },
  title: {
    fontSize: 16,
    fontFamily: 'ComicNeue-Bold',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
};
