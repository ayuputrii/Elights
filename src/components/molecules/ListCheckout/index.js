import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Rating from '../Rating';
import Counter from '../Counter';
import {Gap} from '../../atoms';
import style from './style';

const ListCheckout = ({image, nameProduct, priceProduct, rating}) => {
  return (
    <View style={style.content}>
      <TouchableOpacity activeOpacity={0.4}>
        <View style={style.listContent}>
          <Image source={image} style={style.image} />
          <View style={style.flexColumn}>
            <Text style={style.title}>{nameProduct}</Text>
            <Text style={style.subTitle}>{priceProduct}</Text>
            <Gap height={7} />
            <Counter />
          </View>
          {rating && <Rating />}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListCheckout;
