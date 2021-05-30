import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {HeaderList, ListProduct} from '../../components';
import {FoodDummy1} from '../../assets';
import style from './style';

const Home = ({navigation}) => {
  return (
    <View style={style.container}>
      <HeaderList
        image={FoodDummy1}
        titleHeader="Home List"
        subTitleHeader="Buy someone in here"
      />
      <ScrollView>
        <TouchableOpacity>
          <ListProduct onPress={() => navigation.navigate('DetailProduct')} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Home;
