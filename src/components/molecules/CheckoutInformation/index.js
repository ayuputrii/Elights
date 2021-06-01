import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Gap, Select, TextInput} from '../../atoms';
import style from './style';
import useStore from '../../../store';
import pattern from '../../../helpers/email';

const errorText = 'This field is required!';

const CheckoutInformation = ({controller: Controller, control, errors}) => {
  const userProfile = useStore(state => state.userProfile);
  return (
    <View style={style.content}>
      <ScrollView>
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <TextInput
              labelTextInput="Name"
              plaeceholderTextInput="Type your name"
              value={value}
              onChangeText={text => onChange(text)}
              defaultValue={userProfile.name}
            />
          )}
          name="name"
          rules={{required: true}}
          defaultValue={userProfile.name}
        />
        {errors?.name && <Text style={style.errorText}>{errorText}</Text>}
        <Gap height={20} />
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <TextInput
              labelTextInput="Email"
              plaeceholderTextInput="Type your email"
              value={value}
              onChangeText={text => onChange(text)}
              defaultValue={userProfile.email}
            />
          )}
          name="email"
          rules={{required: true, pattern}}
          defaultValue={userProfile.email}
        />
        {errors?.email && <Text style={style.errorText}>{errorText}</Text>}
        <Gap height={20} />
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <TextInput
              labelTextInput="Phone"
              plaeceholderTextInput="Type your phone number"
              value={value}
              onChangeText={text => onChange(text)}
              defaultValue={userProfile.phone}
              keyboardType="phone-pad"
            />
          )}
          name="phone"
          rules={{required: true}}
          defaultValue={userProfile.phone}
        />
        {errors?.phone && <Text style={style.errorText}>{errorText}</Text>}
        <Gap height={20} />
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <Select
              data={userProfile.address.map(r => ({
                label: r.label,
                value: r,
              }))}
              title="Choose Address"
              selected={value}
              onValueChange={onChange}
            />
          )}
          name="address"
          rules={{required: true}}
          defaultValue={userProfile.address[0]}
        />
        {errors?.address && <Text style={style.errorText}>{errorText}</Text>}
        <Gap height={20} />
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <Select
              data={select.courrier}
              title="Choose Courrier"
              selected={value}
              onValueChange={onChange}
            />
          )}
          name="courrier"
          rules={{required: true}}
          defaultValue="JNT"
        />
        <Gap height={20} />
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <Select
              data={select.payment}
              title="Choose Payment"
              selected={value}
              onValueChange={onChange}
            />
          )}
          name="payment"
          rules={{required: true}}
          defaultValue="Alfamart"
        />
      </ScrollView>
    </View>
  );
};

const select = {
  courrier: [
    {
      label: 'JNT',
      value: 'JNT',
    },
    {
      label: 'JNE',
      value: 'JNE',
    },
  ],
  payment: [
    {
      label: 'Alfamart',
      value: 'Alfamart',
    },
    {
      label: 'BRI',
      value: 'BRI',
    },
  ],
};

export default CheckoutInformation;
