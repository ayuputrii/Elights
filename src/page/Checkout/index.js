import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {IcNext} from '../../assets';
import {CheckoutInformation, Header} from '../../components';
import style from './style';

const Checkout = ({navigation}) => {
  const canGoback = navigation.canGoBack();
  return (
    <View style={style.container}>
      <Header
        nameHeader="Information"
        nameLabel="Checkout now"
        onBack={canGoback ? () => navigation.goBack() : false}
      />
      <CheckoutInformation />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.replace('OrderSuccess')}>
        <View style={style.footerCheckout}>
          <Text style={style.text}>Process</Text>
          <IcNext marginTop={4} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Checkout;
