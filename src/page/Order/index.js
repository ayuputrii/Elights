import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {HeaderList, ListCheckout} from '../../components';
import {FoodDummy1} from '../../assets';
import style from './style';

const Order = ({navigation}) => {
  return (
    <View style={style.container}>
      <HeaderList titleHeader="Order List" subTitleHeader="Buy now" />
      <ScrollView>
        <View style={style.list}>
          <ListCheckout
            image={FoodDummy1}
            nameProduct="Rujak"
            priceProduct="IDR 99.000"
            rating={2}
          />
        </View>
      </ScrollView>
      <View style={style.content}>
        <View style={style.listContent}>
          <View style={style.flexColumn}>
            <Text style={style.subTitle}>Price</Text>
            <Text style={style.value}>IDR 90.000.00</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Checkout')}>
            <View style={style.cartCheckout}>
              <Text style={style.subTitle}>Checkout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Order;
