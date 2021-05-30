import React from 'react';
import {View} from 'react-native';
import {Gap, Select} from '../../atoms';
import style from './style';

const CheckoutInformation = () => {
  return (
    <View style={style.content}>
      <Select
        selectLabel="Jl Mawar"
        selectValue="Jl Mawar"
        selectLabel1="Jl Melati"
        selectValue1="Jl Melati"
        labelSelect="Pilih Alamat"
      />
      <Gap height={20} />
      <Select
        selectLabel="JNT"
        selectValue="JNT"
        selectLabel1="JNE"
        selectValue1="JNE"
        labelSelect="Pilih Kurir"
      />
      <Gap height={20} />
      <Select
        selectLabel="Alfamart"
        selectValue="Alfamart"
        selectLabel1="BRI"
        selectValue1="BRI"
        labelSelect="Pilih Metode Pembayaran"
      />
    </View>
  );
};

export default CheckoutInformation;
