import React from 'react';
import {View, Text} from 'react-native';
import {IlSuccessOrder} from '../../assets';
import {Button, Gap} from '../../components';
import style from './style';

const OrderSuccess = ({navigation}) => {
  return (
    <View style={style.container}>
      <IlSuccessOrder />
      <Gap height={25} />
      <Text style={style.title}>You've made order</Text>
      <Gap height={5} />
      <Text style={style.subTitle}>Just stay at home while we are</Text>
      <Text style={style.subTitle}>preparing your best clothes</Text>
      <Gap height={26} />
      <View style={style.buttonContainer}>
        <Button
          fontSize={12}
          textColor="white"
          color="#009688"
          labelButton="Order Other Mens Clothes"
          onPress={() => navigation.replace('MainApp')}
        />
        <Gap height={12} />
      </View>
    </View>
  );
};

export default OrderSuccess;
