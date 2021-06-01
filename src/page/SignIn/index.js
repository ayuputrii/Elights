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
          labelTextInput="Your Name"
          plaeceholderTextInput="Type your name"
        />
        <Gap height={16} />
        <TextInput
          labelTextInput="Email Address"
          plaeceholderTextInput="Type your email address"
        />
        <Gap height={40} />
        <Button
          textColor="white"
          labelButton="SignIn"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default SignIn;
