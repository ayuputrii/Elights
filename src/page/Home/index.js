import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {HeaderList, ListProduct} from '../../components';
import {FoodDummy1} from '../../assets';
import style from './style';

const Home = () => {
  return (
    <View style={style.container}>
      <HeaderList
        image={FoodDummy1}
        titleHeader="Home List"
        subTitleHeader="Buy something in here"
      />
      <ScrollView>
        <TouchableOpacity>
          <ListProduct />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Home;
