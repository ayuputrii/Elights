import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {HeaderList, ListCheckout} from '../../components';
import style from './style';
import useStore from '../../store';

const Order = ({navigation}) => {
  const cart = useStore(state => state.cart);
  const totalPrice = cart
    .map(r => r.price * r.count)
    .reduce((a, b) => a + b, 0);

  return (
    <View style={style.container}>
      <HeaderList titleHeader="Order List" subTitleHeader="Buy now" />
      <ScrollView>
        <View style={style.list}>
          {cart.map((item, index) => (
            <ListCheckout key={index} item={item} />
          ))}
          {cart.length === 0 && (
            <Text style={style.emptyCartText}>You don't have any item yet</Text>
          )}
        </View>
      </ScrollView>
      <View style={style.content}>
        <View style={style.listContent}>
          <View style={style.flexColumn}>
            <Text style={style.subTitle}>Total Price</Text>
            <Text style={style.value}>${totalPrice}</Text>
          </View>
          {cart.length ? (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Checkout')}>
              <View style={style.cartCheckout}>
                <Text style={style.subTitle}>Checkout</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={style.cartCheckoutDisable}>
              <Text style={style.subTitle}>Checkout</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Order;
