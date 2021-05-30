import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {Text, View} from 'react-native';
import style from './style';

const Select = ({
  labelSelect,
  selectLabel,
  selectValue,
  selectLabel1,
  selectValue1,
}) => {
  return (
    <View>
      <Text style={style.label}>{labelSelect}</Text>
      <View style={style.input}>
        <Picker>
          <Picker.Item label={selectLabel} value={selectValue} />
          <Picker.Item label={selectLabel1} value={selectValue1} />
        </Picker>
      </View>
    </View>
  );
};

export default Select;
