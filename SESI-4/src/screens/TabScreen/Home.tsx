import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Link, useNavigation} from '@react-navigation/native';
import Card from '../../components/Card';

const CoffeeShopLayout = () => {

  // const handleProductPress = () => {
  //   navigation.navigate('DetailScreen');
  // };

  // const handleAddPress = () => {
  //   navigation.navigate('OrderScreen');
  // };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView style={{flex: 1, backgroundColor: '#F8F8F8'}}>
        <View>
          <LinearGradient
            start={{x: 1, y: -0}}
            end={{x: -0, y: 1}}
            colors={['#131313', '#303030']}
            style={{
              paddingVertical: 40,
              paddingHorizontal: 30,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
            }}>
            {/* Header Location */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 24,
              }}>
              <View style={{flex: 1, marginRight: 9}}>
                <Text style={{color: '#B6B6B6', fontSize: 12, marginBottom: 5}}>
                  Location
                </Text>
                <Text
                  style={{color: '#DDDDDD', fontSize: 14, fontWeight: 'bold'}}>
                  Bilzen, Tanjungbalai
                </Text>
              </View>
              <Image
                source={require('../../image/icon.png')}
                resizeMode={'stretch'}
                style={{borderRadius: 14, width: 44, height: 44}}
              />
            </View>

            {/* Search Bar */}
            <View
              style={{
                backgroundColor: '#FFFAFA',
                borderRadius: 16,
                padding: 10,
                marginBottom: 24,
                width: '100%',
                height: '5%',
                alignSelf: 'center',
                marginVertical: 10,
                marginHorizontal: 15,
              }}>
              <TextInput
                style={{
                  color: '#000000',
                  fontSize: 14,
                  textAlign: 'justify',
                  flex: 1,
                  textAlignVertical: 'top',
                }}
                placeholder="Search coffee"
                placeholderTextColor="#A6A6A6"
                onFocus={() => {}}
              />
            </View>

            {/* Promo Section */}
            <ImageBackground
              source={{
                uri: 'https://images.unsplash.com/photo-1550948309-0d8983dbdcc3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
              style={{
                borderRadius: 16,
                paddingVertical: 13,
                paddingHorizontal: 23,
                marginBottom: 24,
                overflow: 'hidden',
              }}>
              <View
                style={{
                  width: 70,
                  height: 30,
                  alignItems: 'center',
                  backgroundColor: '#EC5050',
                  borderRadius: 8,
                  paddingVertical: 8,
                  marginBottom: 16,
                }}>
                <Text
                  style={{color: '#FFFFFF', fontSize: 12, fontWeight: 'bold'}}>
                  Promo
                </Text>
              </View>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 32,
                  fontWeight: 'bold',
                  textAlign: 'left',
                }}>
                Buy one get one FREE
              </Text>
            </ImageBackground>

            {/* Coffee Options */}
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{marginBottom: 24}}>
              <View style={{flexDirection: 'row'}}>
                {[
                  'Cappuccino',
                  'Machiato',
                  'Latte',
                  'Espresso',
                  'kapal api',
                ].map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      backgroundColor: index === 0 ? '#C67C4E' : '#FFFFFF',
                      borderRadius: 12,
                      paddingVertical: 14,
                      paddingHorizontal: 16,
                      marginRight: 8,
                    }}>
                    <Text
                      style={{
                        color: index === 0 ? '#FFFFFF' : '#2F4B4E',
                        fontSize: 14,
                        fontWeight: index === 0 ? 'bold' : 'normal',
                      }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>

            {/* Coffee Items */}
            {[0, 1, 2].map(row => (
              <View
                key={row}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 16,
                  gap: 16,
                }}>
                {[0, 1].map(col => (
                  <Card key={col} col={col} />
                ))}
              </View>
            ))}
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CoffeeShopLayout;
