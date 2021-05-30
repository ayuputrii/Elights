import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FoodDummy1, IcLogout} from '../../assets';
import {ContentProfile, HeaderList, Gap} from '../../components';
import style from './style';

const Profile = ({navigation}) => {
  return (
    <View style={style.container}>
      <HeaderList
        titleHeader="Profile"
        subTitleHeader="You can edit your profile here"
        image={FoodDummy1}
      />
      <Gap height={20} />
      <ContentProfile />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.replace('SignIn')}>
        <View style={style.viewLogout}>
          <Text style={style.subTitle}>Logout</Text>
          <IcLogout marginLeft={10} width={20} />
        </View>
      </TouchableOpacity>
      <Gap height={20} />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('EditProfile')}>
        <View style={style.footer}>
          <Text style={style.text}>Edit Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
