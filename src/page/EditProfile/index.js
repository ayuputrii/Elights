import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Gap, Header, TextInput} from '../../components';
import style from './style';

const EditProfile = ({navigation}) => {
  const canGoback = navigation.canGoBack();
  return (
    <View style={style.container}>
      <Header
        nameHeader="Edit Profile"
        nameLabel="Edit profile now"
        onBack={canGoback ? () => navigation.goBack() : false}
      />
      <ScrollView>
        <View style={style.content}>
          <TextInput
            labelTextInput="Name"
            plaeceholderTextInput="Type your name"
          />
          <Gap height={20} />
          <TextInput
            labelTextInput="Phone Number"
            plaeceholderTextInput="Type your phone number"
          />
          <Gap height={20} />
          <TextInput
            labelTextInput="List Address"
            plaeceholderTextInput="Type name address"
          />
          <TextInput
            plaeceholderTextInput="Type your full address"
            multiline={true}
            numberOfLines={4}
            maxLength={40}
          />
          <Gap height={20} />
          <TouchableOpacity>
            <View style={style.addAddress}>
              <Text style={style.textAdd}>Add Address</Text>
            </View>
          </TouchableOpacity>
          <Gap height={20} />
        </View>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('MainApp')}>
        <View style={style.footer}>
          <Text style={style.text}>Submit</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;
