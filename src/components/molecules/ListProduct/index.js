import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';
import {FoodDummy1} from '../../../assets';

const ListProduct = ({onPress}) => {
  return (
    <View style={style.container}>
      {Array(12)
        .fill('c')
        .map((r, i) => (
          <TouchableOpacity key={i} onPress={onPress}>
            <View style={style.productCard}>
              <Image source={FoodDummy1} style={style.image} />
              <View style={style.contentText}>
                <Text style={style.title}>Product Name</Text>
                <Text style={style.subTitle}>Rp. 220.000</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
    </View>
  );
};
export default ListProduct;
