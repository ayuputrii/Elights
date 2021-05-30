import React from 'react';
import {View, Text} from 'react-native';
import {IcStarOff, IcStarOn} from '../../../assets';
import style from './style';

const Rating = () => {
  return (
    <View style={style.ratingContent}>
      <View style={style.starContent}>
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOff />
      </View>
      <Text style={style.textRate}>4.5</Text>
    </View>
  );
};

export default Rating;
