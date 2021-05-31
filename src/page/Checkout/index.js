import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {IcNext} from '../../assets';
import {CheckoutInformation, Header} from '../../components';
import style from './style';
import {useForm, Controller} from 'react-hook-form';
import useStore from '../../store';

const Checkout = ({navigation}) => {
  const canGoback = navigation.canGoBack();
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm();
  const clearCart = useStore(state => state.clearCart);
  const onSubmit = data => {
    clearCart();
    navigation.replace('OrderSuccess');
  };
  return (
    <View style={style.container}>
      <Header
        nameHeader="Information"
        nameLabel="Checkout now"
        onBack={canGoback ? () => navigation.goBack() : false}
      />
      <CheckoutInformation
        controller={Controller}
        control={control}
        errors={errors}
      />
      <TouchableOpacity activeOpacity={0.7} onPress={handleSubmit(onSubmit)}>
        <View style={style.footerCheckout}>
          <Text style={style.text}>Process</Text>
          <IcNext marginTop={4} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Checkout;
