import React from 'react';
import {View, Text, Image} from 'react-native';
import {FoodDummy1} from '../../../assets';
import {Gap} from '../../atoms';
import style from './style';

const ContentProfile = () => {
  return (
    <View style={style.profile}>
      <Image source={FoodDummy1} style={style.image} />
      <Gap height={20} />
      <Text style={style.title}> Ayuu</Text>
      <Text style={style.subTitle}> 07442442</Text>
    </View>
  );
};

export default ContentProfile;
