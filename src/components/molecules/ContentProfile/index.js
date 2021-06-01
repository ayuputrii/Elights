import React from 'react';
import {View, Text, Image} from 'react-native';
import {FoodDummy1} from '../../../assets';
import {Gap} from '../../atoms';
import style from './style';
import useStore from '../../../store';

const ContentProfile = () => {
  const userProfile = useStore(state => state.userProfile);
  return (
    <View style={style.profile}>
      <Image source={FoodDummy1} style={style.image} />
      <Gap height={20} />
      <Text style={style.title}>{userProfile.name}</Text>
      <Text style={style.subTitle}>{userProfile.email}</Text>
      <Text style={style.subTitle}>{userProfile.phone}</Text>
    </View>
  );
};

export default ContentProfile;
