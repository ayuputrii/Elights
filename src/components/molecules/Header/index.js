import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './style';
import {IcBack} from '../../../assets';
import {Gap} from '../../atoms';

const Header = ({nameHeader, nameLabel, onBack}) => {
  return (
    <View style={style.container}>
      {onBack && (
        <TouchableOpacity onPress={onBack}>
          <View style={style.back}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}
      <View style={style.flexColumn}>
        <Text style={style.title}>{nameHeader}</Text>
        <Gap height={9} />
        <Text style={style.subTitle}>{nameLabel}</Text>
      </View>
    </View>
  );
};

export default Header;
