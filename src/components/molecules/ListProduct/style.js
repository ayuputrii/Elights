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
  productCard: {
    width: (WIDTH / 2) - (containerPadding + 5),
    height: HEIGHT / 3,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#FFF',
  },
  image: {
    width: '100%',
    height: '60%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  contentText:{
    margin: 12,
  },
  title: {
    fontSize: 16 ,
    fontFamily: 'ComicNeue-Bold',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
};
