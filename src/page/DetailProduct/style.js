/* eslint-disable prettier/prettier */
import {Dimensions} from 'react-native';

const {height: HEIGHT, width: WIDTH} = Dimensions.get('window');

export default {
  page: {
    flex: 1,
  },
  backgroundCover: {
    height: HEIGHT / 2,
    paddingTop: 26,
    paddingLeft: 22,
  },
  back: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
  },
  content: {
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
  titleBlocker: {
    width: WIDTH / 2,
    flexDirection: 'column',

  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 16,
    fontFamily: 'ComicNeue-Bold',
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'ComicNeue-Bold',
    color: '#8D92A3',
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    fontFamily: 'ComicNeue-Bold',
    color: '#8D92A3',
    marginBottom: 4,
  },
  footer: {
    flexDirection: 'row',
  },
  priceContainer: {
    flex: 1,
    paddingTop: 12,
  },
  button: {
    width: 100,
    paddingVertical: 24,
    alignItems: 'center',
  },
  labelTotal: {
    fontSize: 17,
    color: '#8D92A3',
  },
  priceTotal: {
    fontSize: 18,
    fontFamily: 'ComicNeue-Bold',
    color: '#020202',
  },
};
