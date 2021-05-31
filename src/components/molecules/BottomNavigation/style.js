export default {
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 40,
    justifyContent: 'space-between',
    shadowColor: 'green',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,
  },
  badgeCart: {
    position: 'relative',
  },
  badgeNumber: {
    width: 17,
    height: 17,
    backgroundColor: '#009688',
    position: 'absolute',
    top: 0,
    right: -5,
    borderRadius: 50,
    zIndex: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 10,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    marginTop: 1,
  },
};
