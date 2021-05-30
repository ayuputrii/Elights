import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import {FoodDummy1, IcBackWhite} from '../../assets';
import {Button, Counter, Rating} from '../../components';

const DetailProduct = ({navigation}) => {
  const canGoback = navigation.canGoBack();

  return (
    <View style={style.page}>
      <ImageBackground source={FoodDummy1} style={style.backgroundCover}>
        <TouchableOpacity
          style={style.back}
          onPress={canGoback ? () => navigation.goBack() : false}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={style.content}>
        <View style={style.mainContent}>
          <View style={style.productContainer}>
            <View>
              <Text style={style.title}>Cherry Healthy</Text>
              <Rating />
            </View>
            <Counter />
          </View>
          <Text style={style.desc}>
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur.
          </Text>
          <Text style={style.label}>Ingradients</Text>
          <Text style={style.desc}>Seledri, telur, blueberry,madu.</Text>
        </View>
        <View style={style.footer}>
          <View style={style.priceContainer}>
            <Text style={style.labelTotal}>Total Prices</Text>
            <Text style={style.priceTotal}>IDR 12.200.000</Text>
          </View>
          <View style={style.button}>
            <Button
              labelButton="Order Now"
              onPress={() => navigation.navigate('MainApp')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailProduct;
