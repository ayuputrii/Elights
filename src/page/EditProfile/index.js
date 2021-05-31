import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import {Gap, Header, TextInput} from '../../components';
import style from './style';
import {useForm, Controller, useFieldArray} from 'react-hook-form';
import useStore from '../../store';

const errorText = 'This field is required!';

const EditProfile = ({navigation}) => {
  const canGoback = navigation.canGoBack();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const {fields, append, remove} = useFieldArray({
    control,
    name: 'address',
  });
  const userProfile = useStore(state => state.userProfile);
  const editProfile = useStore(state => state.editProfile);
  console.log('fields', fields);
  const onSubmit = data => {
    editProfile(data);
    if (canGoback) {
      navigation.goBack();
    }
  };

  useEffect(() => {
    userProfile.address.map(r => append(r));
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  const appendAddress = () => {
    append({
      label: '',
      detail: '',
    });
  };

  const prompt = index => {
    Alert.alert('Remove Address', 'Are you sure want to remove this address?', [
      {text: 'Cancel'},
      {text: 'OK', onPress: () => remove(index)},
    ]);
  };

  return (
    <View style={style.container}>
      <Header
        nameHeader="Edit Profile"
        nameLabel="Edit profile now"
        onBack={canGoback ? () => navigation.goBack() : false}
      />
      <ScrollView>
        <View style={style.content}>
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
          {fields.map((field, index) => (
            <View key={field.id} style={style.addressWrapper}>
              <Controller
                control={control}
                render={({field: {onChange, value}}) => (
                  <TextInput
                    labelTextInput="Label"
                    plaeceholderTextInput="Address label"
                    value={value}
                    onChangeText={text => onChange(text)}
                    defaultValue={field.label}
                  />
                )}
                name={`address.${index}.label`}
                rules={{required: true}}
                defaultValue={field.label}
              />
              {Object.keys(errors).includes('address') &&
                errors.address[index]?.label && (
                  <Text style={style.errorText}>{errorText}</Text>
                )}
              <Controller
                control={control}
                render={({field: {onChange, value}}) => (
                  <TextInput
                    plaeceholderTextInput="Type your full address"
                    multiline={true}
                    numberOfLines={4}
                    maxLength={40}
                    value={value}
                    onChangeText={text => onChange(text)}
                    defaultValue={field.detail}
                  />
                )}
                name={`address.${index}.detail`}
                rules={{required: true}}
                defaultValue={field.detail}
              />
              {Object.keys(errors).includes('address') &&
                errors?.address[index]?.detail && (
                  <Text style={style.errorText}>{errorText}</Text>
                )}
              <Text onPress={() => prompt(index)} style={style.removeAddress}>
                Remove this address
              </Text>
            </View>
          ))}
          <Gap height={20} />
          <TouchableOpacity onPress={appendAddress}>
            <View style={style.addAddress}>
              <Text style={style.textAdd}>Add Address</Text>
            </View>
          </TouchableOpacity>
          <Gap height={20} />
        </View>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleSubmit(onSubmit)}
        // onPress={() => navigation.navigate('MainApp')}
      >
        <View style={style.footer}>
          <Text style={style.text}>Submit</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;
