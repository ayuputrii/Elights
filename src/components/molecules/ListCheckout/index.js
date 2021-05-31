import React from 'react';
import {Image, Text, TouchableOpacity, View, Alert} from 'react-native';
import Counter from '../Counter';
import {Gap} from '../../atoms';
import style from './style';
import useStore from '../../../store';

const ListCheckout = ({item}) => {
  const increment = useStore(state => state.increment);
  const decrement = useStore(state => state.decrement);
  const removeItem = useStore(state => state.removeItem);

  const prompt = () => {
    Alert.alert('Remove Item', 'Are you sure want to remove this item?', [
      {text: 'Cancel'},
      {text: 'OK', onPress: () => removeItem(item)},
    ]);
  };

  return (
    <View style={style.content}>
      <TouchableOpacity activeOpacity={0.4}>
        <View style={style.listContent}>
          <Image source={{uri: item.image}} style={style.image} />
          <View style={style.flexColumn}>
            <Text style={style.title}>
              {item.title.length > 35
                ? item.title.slice(0, 35) + '...'
                : item.title}
            </Text>
            <Text style={style.subTitle}>${item.price * item.count}</Text>
            <Gap height={7} />
            <Counter
              count={item.count}
              increment={() => increment(item)}
              decrement={() => decrement(item)}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={style.removeItem} onPress={prompt}>
        <Text style={style.removeItemText}>Remove Item</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListCheckout;
