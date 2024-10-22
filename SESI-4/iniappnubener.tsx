import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  ImageBackgroundComponent,
  ImageBackgroundBase,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CoffeeShopLayout: React.FC = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
      }}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#F8F8F8',
        }}>
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
                <Text
                  style={{
                    color: '#B6B6B6',
                    fontSize: 12,
                    marginBottom: 5,
                  }}>
                  {'Location'}
                </Text>
                <Text
                  style={{
                    color: '#DDDDDD',
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}>
                  {'Bilzen, Tanjungbalai'}
                </Text>
              </View>
              <Image
                source={require('./src/image/icon.png')}
                resizeMode={'stretch'}
                style={{
                  borderRadius: 14,
                  width: 44,
                  height: 44,
                }}
              />
            </View>

            {/* Search Bar */}
            <View
              style={{
                backgroundColor: '#FFFAFA',
                borderRadius: 16,
                paddingVertical: 12,
                paddingHorizontal: 16,
                marginBottom: 24,
                width: '100%',
                height: '5%',

                alignSelf: 'center',
              }}>
              <TextInput
                style={{
                  color: '#000000',
                  fontSize: 14,
                  justifyContent: 'space-evenly',
                  textAlign: 'justify',
                  flex: 1,
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
                  style={{
                    color: '#FFFFFF',
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}>
                  {'Promo'}
                </Text>
              </View>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 32,
                  fontWeight: 'bold',
                  textAlign: 'left',
                }}>
                {'Buy one get one FREE'}
              </Text>
            </ImageBackground>

            {/* Coffee Options */}
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{marginBottom: 24}}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                {[
                  'Cappuccino',
                  'Machiato',
                  'Latte',
                  'Espresso',
                  'kapal api',
                ].map((item, index) => (
                  <View
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
                  </View>
                ))}
              </View>
            </ScrollView>

            {/* Coffee Items 1,2 */}
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 16,
                  paddingVertical: 4,
                  paddingHorizontal: 12,
                  marginRight: 8,
                }}>
                <ImageBackground
                  source={{
                    uri: 'https://images.unsplash.com/photo-1550948309-0d8983dbdcc3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  }}
                  resizeMode={'stretch'}
                  imageStyle={{borderRadius: 16}}
                  style={{height: 132, marginBottom: 14}}>
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
                      paddingVertical: 8,
                    }}>
                    <Image
                      source={require('./src/image/bintang.png')}
                      resizeMode={'stretch'}
                      style={{
                        width: 15,
                        height: 15,
                        marginRight: 2,
                      }}
                    />
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 8,
                        fontWeight: 'bold',
                      }}>
                      {'4.8'}
                    </Text>
                  </View>
                </ImageBackground>
                <Text
                  style={{
                    color: '#2F2D2C',
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginBottom: 9,
                  }}>
                  {'Cappuccino'}
                </Text>
                <Text
                  style={{
                    color: '#9B9B9B',
                    fontSize: 12,
                    marginBottom: 8,
                  }}>
                  {'with Chocolate'}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: '#2F4B4E',
                      fontSize: 18,
                      fontWeight: 'bold',
                      marginRight: 4,
                      flex: 1,
                    }}>
                    {'$ 4.53'}
                  </Text>
                  <View
                    style={{
                      width: 32,
                      backgroundColor: '#C67C4E',
                      borderRadius: 10,
                      paddingHorizontal: 8,
                    }}>
                    <Image
                      source={require('./src/image/bintang.png')}
                      resizeMode={'stretch'}
                      style={{height: 16, marginTop: 8}}
                    />
                  </View>
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 16,
                  paddingVertical: 4,
                  paddingRight: 12,
                  marginLeft: 8,
                }}>
                <ImageBackground
                  source={{
                    uri: 'https://www.amashaamasala.com/wp-content/uploads/2024/06/coffee_its_benefits_898_1_.jpg',
                  }}
                  resizeMode={'stretch'}
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
                      paddingVertical: 8,
                    }}>
                    <Image
                      source={require('./src/image/bintang.png')}
                      resizeMode={'stretch'}
                      style={{
                        width: 15,
                        height: 15,
                        marginRight: 2,
                      }}
                    />
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 8,
                        fontWeight: 'bold',
                      }}>
                      {'4.9'}
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
                  {'Cappuccino'}
                </Text>
                <Text
                  style={{
                    color: '#9B9B9B',
                    fontSize: 12,
                    marginBottom: 8,
                    marginLeft: 12,
                  }}>
                  {'with Oat Milk'}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 14,
                  }}>
                  <Text
                    style={{
                      color: '#2F4B4E',
                      fontSize: 18,
                      fontWeight: 'bold',
                      marginRight: 4,
                      flex: 1,
                    }}>
                    {'$ 5.00'}
                  </Text>
                  <View
                    style={{
                      width: 32,
                      backgroundColor: '#C67C4E',
                      borderRadius: 10,
                      paddingHorizontal: 8,
                    }}>
                    <Image
                      source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                      resizeMode={'stretch'}
                      style={{height: 16, marginTop: 8}}
                    />
                  </View>
                </View>
              </View>
            </View>
            {/* coffe item 3,4 */}
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 16,
                  paddingVertical: 4,
                  paddingHorizontal: 12,
                  marginRight: 8,
                  marginTop: 8,
                }}>
                <ImageBackground
                  source={{
                    uri: 'https://images.unsplash.com/photo-1550948309-0d8983dbdcc3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  }}
                  resizeMode={'stretch'}
                  imageStyle={{borderRadius: 16}}
                  style={{height: 132, marginBottom: 14}}>
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
                      paddingVertical: 8,
                    }}>
                    <Image
                      source={require('./src/image/bintang.png')}
                      resizeMode={'stretch'}
                      style={{
                        width: 15,
                        height: 15,
                        marginRight: 2,
                      }}
                    />
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 8,
                        fontWeight: 'bold',
                      }}>
                      {'4.8'}
                    </Text>
                  </View>
                </ImageBackground>
                <Text
                  style={{
                    color: '#2F2D2C',
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginBottom: 9,
                  }}>
                  {'Cappuccino'}
                </Text>
                <Text
                  style={{
                    color: '#9B9B9B',
                    fontSize: 12,
                    marginBottom: 8,
                  }}>
                  {'with Chocolate'}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: '#2F4B4E',
                      fontSize: 18,
                      fontWeight: 'bold',
                      marginRight: 4,
                      flex: 1,
                    }}>
                    {'$ 4.53'}
                  </Text>
                  <View
                    style={{
                      width: 32,
                      backgroundColor: '#C67C4E',
                      borderRadius: 10,
                      paddingHorizontal: 8,
                    }}>
                    <Image
                      source={require('./src/image/bintang.png')}
                      resizeMode={'stretch'}
                      style={{height: 16, marginTop: 8}}
                    />
                  </View>
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 16,
                  paddingVertical: 4,
                  paddingRight: 12,
                  marginLeft: 8,
                  marginTop: 8,
                }}>
                <ImageBackground
                  source={{
                    uri: 'https://foodzilla.io/dist/images/does-cappuccino-have-caffeine-in-it.jpg',
                  }}
                  resizeMode={'stretch'}
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
                      paddingVertical: 8,
                    }}>
                    <Image
                      source={require('./src/image/bintang.png')}
                      resizeMode={'stretch'}
                      style={{
                        width: 15,
                        height: 15,
                        marginRight: 2,
                      }}
                    />
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 8,
                        fontWeight: 'bold',
                      }}>
                      {'4.9'}
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
                  {'Cappuccino'}
                </Text>
                <Text
                  style={{
                    color: '#9B9B9B',
                    fontSize: 12,
                    marginBottom: 8,
                    marginLeft: 12,
                  }}>
                  {'with Oat Milk'}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 14,
                  }}>
                  <Text
                    style={{
                      color: '#2F4B4E',
                      fontSize: 18,
                      fontWeight: 'bold',
                      marginRight: 4,
                      flex: 1,
                    }}>
                    {'$ 5.00'}
                  </Text>
                  <View
                    style={{
                      width: 32,
                      backgroundColor: '#C67C4E',
                      borderRadius: 10,
                      paddingHorizontal: 8,
                    }}>
                    <Image
                      source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                      resizeMode={'stretch'}
                      style={{height: 16, marginTop: 8}}
                    />
                  </View>
                </View>
              </View>
            </View>

            {/* coffe item 5,6 */}
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 16,
                  paddingVertical: 4,
                  paddingHorizontal: 12,
                  marginRight: 8,
                  marginTop: 8,
                }}>
                <ImageBackground
                  source={{
                    uri: 'https://images.unsplash.com/photo-1550948309-0d8983dbdcc3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  }}
                  resizeMode={'stretch'}
                  imageStyle={{borderRadius: 16}}
                  style={{height: 132, marginBottom: 14}}>
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
                      paddingVertical: 8,
                    }}>
                    <Image
                      source={require('./src/image/bintang.png')}
                      resizeMode={'stretch'}
                      style={{
                        width: 15,
                        height: 15,
                        marginRight: 2,
                      }}
                    />
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 8,
                        fontWeight: 'bold',
                      }}>
                      {'4.8'}
                    </Text>
                  </View>
                </ImageBackground>
                <Text
                  style={{
                    color: '#2F2D2C',
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginBottom: 9,
                  }}>
                  {'Cappuccino'}
                </Text>
                <Text
                  style={{
                    color: '#9B9B9B',
                    fontSize: 12,
                    marginBottom: 8,
                  }}>
                  {'with Chocolate'}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: '#2F4B4E',
                      fontSize: 18,
                      fontWeight: 'bold',
                      marginRight: 4,
                      flex: 1,
                    }}>
                    {'$ 4.53'}
                  </Text>
                  <View
                    style={{
                      width: 32,
                      backgroundColor: '#C67C4E',
                      borderRadius: 10,
                      paddingHorizontal: 8,
                    }}>
                    <Image
                      source={require('./src/image/bintang.png')}
                      resizeMode={'stretch'}
                      style={{height: 16, marginTop: 8}}
                    />
                  </View>
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 16,
                  paddingVertical: 4,
                  paddingRight: 12,
                  marginLeft: 8,
                  marginTop: 8,
                }}>
                <ImageBackground
                  source={{
                    uri: 'https://foodzilla.io/dist/images/does-cappuccino-have-caffeine-in-it.jpg',
                  }}
                  resizeMode={'stretch'}
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
                      paddingVertical: 8,
                    }}>
                    <Image
                      source={require('./src/image/bintang.png')}
                      resizeMode={'stretch'}
                      style={{
                        width: 15,
                        height: 15,
                        marginRight: 2,
                      }}
                    />
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 8,
                        fontWeight: 'bold',
                      }}>
                      {'4.9'}
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
                  {'Cappuccino'}
                </Text>
                <Text
                  style={{
                    color: '#9B9B9B',
                    fontSize: 12,
                    marginBottom: 8,
                    marginLeft: 12,
                  }}>
                  {'with Oat Milk'}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 14,
                  }}>
                  <Text
                    style={{
                      color: '#2F4B4E',
                      fontSize: 18,
                      fontWeight: 'bold',
                      marginRight: 4,
                      flex: 1,
                    }}>
                    {'$ 5.00'}
                  </Text>
                  <View
                    style={{
                      width: 32,
                      backgroundColor: '#C67C4E',
                      borderRadius: 10,
                      paddingHorizontal: 8,
                    }}>
                    <Image
                      source={{uri: 'https://i.imgur.com/1tMFzp8.png'}}
                      resizeMode={'stretch'}
                      style={{height: 16, marginTop: 8}}
                    />
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CoffeeShopLayout;