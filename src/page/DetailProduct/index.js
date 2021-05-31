import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './style';
import {IcBackWhite} from '../../assets';
import {Button, Counter, Rating} from '../../components';

const DetailProduct = ({navigation, route}) => {
  const canGoback = navigation.canGoBack();
  const {title, image, description, category, price} = route.params;
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <View style={style.page}>
      <ImageBackground source={{uri: image}} style={style.backgroundCover}>
        <TouchableOpacity
          style={style.back}
          onPress={canGoback ? () => navigation.goBack() : false}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={style.content}>
        <View style={style.mainContent}>
          <View style={style.productContainer}>
            <View style={style.titleBlocker}>
              <Text style={style.title}>{title}</Text>
              <Rating />
            </View>
            <Counter
              count={count}
              increment={increment}
              decrement={decrement}
            />
          </View>
          <ScrollView>
            <Text style={style.desc}>{description}</Text>
            <Text style={style.label}>Category</Text>
            <Text style={style.desc}> =&gt; {category}</Text>
          </ScrollView>
        </View>
        <View style={style.footer}>
          <View style={style.priceContainer}>
            <Text style={style.labelTotal}>Total Prices</Text>
            <Text style={style.priceTotal}>${price * count}</Text>
          </View>
          <View style={style.button}>
            <Button
              textColor="white"
              labelButton="Checkout Now"
              fontSize={10}
              onPress={() => navigation.navigate('MainApp')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailProduct;
