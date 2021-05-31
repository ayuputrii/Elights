import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {Text, View} from 'react-native';
import style from './style';

const Select = ({data, title, selected, onValueChange}) => {
  return (
    <View>
      <Text style={style.label}>{title}</Text>
      <View style={style.input}>
        <Picker selectedValue={selected} onValueChange={onValueChange}>
          {data.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default Select;
