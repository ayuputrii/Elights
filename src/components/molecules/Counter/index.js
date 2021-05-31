import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {IcMin, IcPlus} from '../../../assets';
import style from './style';

const Counter = ({count, increment, decrement}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => decrement()}>
        <IcMin />
      </TouchableOpacity>
      <Text style={style.text}>{count || 1}</Text>
      <TouchableOpacity onPress={() => increment()}>
        <IcPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
