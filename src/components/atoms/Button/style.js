export default {
  container: color => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 8,
  }),
  text: (color, fontSize) => ({
    fontSize: fontSize,
    fontFamily: 'Poppins-Medium',
    color: color,
    textAlign: 'center',
  }),
};
