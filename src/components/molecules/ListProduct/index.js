import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import style from './style';
import {useQuery} from 'react-query';
import axios from 'axios';
import {IcOrderOn} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import useStore from '../../../store';

const API_URL = 'https://fakestoreapi.com/products';

const ListProduct = () => {
  const navigation = useNavigation();
  const {isLoading, error, data} = useQuery('getData', () => axios(API_URL));
  const cart = useStore(state => state.cart);

  const usePrevious = value => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };
  console.log('CART_(((', cart, prevCart);
  const prevCart = usePrevious(cart);

  useEffect(() => {
    if (prevCart?.length > 0) {
      if (prevCart.length < cart.length) {
        showAlert();
      }
    }
  }, [cart, prevCart]);

  const showAlert = () => {
    Alert.alert('Add Item Success', 'Item successfully added to cart!');
  };
  const addItem = useStore(state => {
    showAlert();
    return state.addItem;
  });
  console.log('CART__', cart);

  const RenderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailProduct', item)}>
      <View style={style.productCard}>
        <Image source={{uri: item.image}} style={style.image} />
        <View style={style.contentText}>
          <Text style={style.title}>
            {item.title.length > 35
              ? item.title.slice(0, 35) + '...'
              : item.title}
          </Text>
          <Text style={style.subTitle}>${item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => addItem(item)} style={style.addToCart}>
          <IcOrderOn width={20} height={20} />
          <Text style={style.addToCartText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
  if (isLoading) {
    return (
      <View style={style.loadingContainer}>
        <ActivityIndicator color="#000" size="large" />
      </View>
    );
  }

  return (
    <View style={style.container}>
      {data.data.map((item, index) => (
        <RenderItem key={index} item={item} />
      ))}
    </View>
  );
};
export default ListProduct;
