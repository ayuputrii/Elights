import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {IcMin, IcPlus} from '../../../assets';
import style from './style';

const Counter = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity>
        <IcMin />
      </TouchableOpacity>
      <Text style={style.text}>24</Text>
      <TouchableOpacity>
        <IcPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
