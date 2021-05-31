import React from 'react';
import {Text, View} from 'react-native';
import {Button, Gap, TextInput} from '../../components';
import style from './style';

const SignIn = ({navigation}) => {
  return (
    <View style={style.container}>
      <Text style={style.titleHeader}>Elights</Text>
      <Gap height={2} />
      <View style={style.viewContent}>
        <Text style={style.title}>SignIn</Text>
        <Gap height={45} />
        <TextInput
          labelTextInput="Email Address"
          plaeceholderTextInput="Type your email address"
        />
        <Gap height={16} />
        <TextInput
          labelTextInput="Password"
          plaeceholderTextInput="Type your password"
        />
        <Gap height={24} />
        <Button
          textColor="white"
          labelButton="SignIn"
          onPress={() => navigation.replace('MainApp')}
        />
        <Gap height={12} />
        <Button
          labelButton="Create New Account"
          color="#8D92A3"
          textColor="white"
        />
      </View>
    </View>
  );
};

export default SignIn;
