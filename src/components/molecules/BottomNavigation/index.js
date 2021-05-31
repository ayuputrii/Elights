import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  IcHomeOff,
  IcHomeOn,
  IcOrderOff,
  IcOrderOn,
  IcProfileOff,
  IcProfileOn,
} from '../../../assets';
import useStore from '../../../store';
import style from './style';

const BottomNavigation = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const cart = useStore(s => s.cart);
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const Icon = ({label, focus}) => {
    /* eslint-disable no-extra-boolean-cast */
    switch (label) {
      case 'Home':
        return Boolean(focus) ? <IcHomeOn /> : <IcHomeOff />;
      case 'Order':
        return Boolean(focus) ? <IcOrderOn /> : <IcOrderOff />;
      case 'Profile':
        return Boolean(focus) ? <IcProfileOn /> : <IcProfileOff />;
      default:
        return <IcOrderOn />;
    }
  };

  return (
    <View style={style.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            {route.name === 'Order' ? (
              <View style={style.badgeCart}>
                {cart.length > 0 && (
                  <View style={style.badgeNumber}>
                    <Text style={style.badgeText}>{cart.length}</Text>
                  </View>
                )}
                <Icon label={label} focus={isFocused} />
              </View>
            ) : (
              <Icon label={label} focus={isFocused} />
            )}
            <Text
              style={{
                color: isFocused ? '#009688' : '#E2E2E2',
                textAlign: 'center',
                top: 4,
                fontFamily: 'ComicNeue-Bold',
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigation;
