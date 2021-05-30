export default {
  header: backgroundColor => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: backgroundColor,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 27,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#289672',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.79,
    shadowRadius: 14.78,
    elevation: 22,
  }),
  flexColumn: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 22,
    fontFamily: 'ComicNeue-Bold',
    color: '#020202',
  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  image: {
    borderRadius: 8,
    width: 60,
    height: 60,
  },
};
