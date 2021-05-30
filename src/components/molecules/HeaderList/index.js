import React from 'react';
import {Text, View, Image} from 'react-native';
import {Gap} from '../../atoms';
import style from './style';

const HeaderList = ({
  backgroundColor = 'white',
  titleHeader,
  subTitleHeader,
  image,
}) => {
  return (
    <View style={style.header(backgroundColor)}>
      <View style={style.flexColumn}>
        <Text style={style.title}>{titleHeader}</Text>
        <Gap height={9} />
        <Text style={style.subTitle}>{subTitleHeader}</Text>
      </View>
      <Image source={image} style={style.image} />
    </View>
  );
};

export default HeaderList;
