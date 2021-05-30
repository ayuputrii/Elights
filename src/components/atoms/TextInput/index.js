import React from 'react';
import {Text, View, TextInput as InputText} from 'react-native';
import style from './style';

const TextInput = ({
  labelTextInput,
  plaeceholderTextInput,
  multiline,
  numberOfLines,
  maxLength,
}) => {
  return (
    <View>
      <Text style={style.label}>{labelTextInput}</Text>
      <InputText
        style={style.input}
        placeholder={plaeceholderTextInput}
        placeholderTextColor="#020202"
        color="#020202"
        fontFamily="Poppins-Light"
        multiline={multiline}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
      />
    </View>
  );
};

export default TextInput;
