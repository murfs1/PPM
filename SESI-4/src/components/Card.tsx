import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  View,
  Image,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type CardProps = {
  col: number;
};

const Card = (props: CardProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen')} // Navigasi langsung ke DetailScreen
      key={props.col}
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        paddingVertical: 4,
        paddingRight: 12,
        marginLeft: props.col === 0 ? 0 : 8,
      }}>
      <ImageBackground
        source={{
          uri: 'https://foodzilla.io/dist/images/does-cappuccino-have-caffeine-in-it.jpg',
        }}
        resizeMode={'cover'}
        imageStyle={{borderRadius: 16}}
        style={{height: 132, marginBottom: 14, marginLeft: 10}}>
        <View
          style={{
            width: 51,
            height: 25,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00000026',
            borderTopLeftRadius: 16,
            borderBottomRightRadius: 16,
            paddingVertical: 4,
          }}>
          <Image
            source={require('../image/bintang.png')}
            resizeMode={'contain'}
            style={{
              width: 15,
              height: 15,
              marginRight: 2,
            }}
          />
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 10,
              fontWeight: 'bold',
            }}>
            4.9
          </Text>
        </View>
      </ImageBackground>

      <Text
        style={{
          color: '#2F2D2C',
          fontSize: 16,
          fontWeight: 'bold',
          marginBottom: 9,
          marginLeft: 12,
        }}>
        Cappuccino
      </Text>
      <Text
        style={{
          color: '#9B9B9B',
          fontSize: 12,
          marginBottom: 9,
          marginLeft: 12,
        }}>
        with Chocolate
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#2F4B4E',
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 12,
          }}>
          $ 4.53
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('OrderScreen')} // Navigasi ke DetailScreen ketika tombol ini ditekan
          style={{
            backgroundColor: '#C67C4E',
            borderRadius: 10,
            padding: 8,
            marginRight: 12,
          }}>
          <Ionicons name="add" size={16} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
