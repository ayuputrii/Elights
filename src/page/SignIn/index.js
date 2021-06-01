import React from 'react';
import {Text, View} from 'react-native';
import {Button, Gap, TextInput} from '../../components';
import style from './style';
import {useForm, Controller} from 'react-hook-form';
import useStore from '../../store';

const SignIn = ({navigation}) => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm();
  const userProfile = useStore(state => state.userProfile);
  const clearCart = useStore(state => state.clearCart);

  const onSubmit = data => {
    clearCart(data);
    navigation.replace('MainApp');
  };

  return (
    <View style={style.container}>
      <Text style={style.titleHeader}>Elights</Text>
      <Gap height={2} />
      <View style={style.viewContent}>
        <Text style={style.title}>SignIn</Text>
        <Gap height={45} />
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
        <Gap height={16} />
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <TextInput
              labelTextInput="Email Address"
              plaeceholderTextInput="Type your email address"
              value={value}
              onChangeText={text => onChange(text)}
              defaultValue={userProfile.email}
            />
          )}
          name="email"
          rules={{required: true}}
          defaultValue={userProfile.email}
        />
        {errors?.email && <Text style={style.errorText}>{errorText}</Text>}
        <Gap height={40} />
        <Button
          textColor="white"
          labelButton="SignIn"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

export default SignIn;
