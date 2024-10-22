import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Link, useNavigation} from '@react-navigation/native';

const DetailScreen = () => {
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Detail</Text>
          <TouchableOpacity>
            <Text style={styles.favoriteText}>♥</Text>
          </TouchableOpacity>
        </View>

        {/* Gambar Produk */}
        <Image
          source={require('../../image/Americano.png')} // Ganti sesuai path gambarmu
          style={styles.productImage}
        />

        {/* Informasi Produk */}
        <View style={styles.productInfo}>
          <Text style={styles.productName}>Cappuccino</Text>
          <Text style={styles.productSubName}>with Chocolate</Text>

          {/* Rating dan Icon */}
          <View style={styles.productDetails}>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>⭐ 4.8</Text>
              <Text style={styles.ratingCount}>(230)</Text>
            </View>
            <View style={styles.icons}>
              <Text style={styles.icon}>☕</Text>
              <Text style={styles.icon}>📝</Text>
            </View>
          </View>

          {/* Deskripsi */}
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>
            A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml
            of espresso coffee and 85 ml of fresh milk the fo..{' '}
            <Text style={styles.readMore}>Read More</Text>
          </Text>

          {/* Pilihan Ukuran */}
          <Text style={styles.sectionTitle}>Size</Text>
          <View style={styles.sizeOptions}>
            {['S', 'M', 'L'].map(size => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeButton,
                  selectedSize === size && styles.sizeButtonSelected,
                ]}
                onPress={() => setSelectedSize(size)}>
                <Text
                  style={[
                    styles.sizeText,
                    selectedSize === size && styles.sizeTextSelected,
                  ]}>
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Bagian Harga dan Tombol Beli */}
        <View style={styles.footer}>
          <Text style={styles.price}>$ 4.53</Text>
          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => navigation.navigate('OrderScreen')}>
            <Text style={styles.buyButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  backButton: {
    fontSize: 24,
  },
  backText: {
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  favoriteButton: {
    fontSize: 24,
  },
  favoriteText: {
    fontSize: 24,
    color: 'red',
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  productInfo: {
    marginBottom: 20,
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  productSubName: {
    fontSize: 14,
    color: '#aaa',
  },
  productDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    marginRight: 5,
  },
  ratingCount: {
    fontSize: 14,
    color: '#aaa',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 24,
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  readMore: {
    color: '#F2994A',
    fontWeight: 'bold',
  },
  sizeOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sizeButtonSelected: {
    borderColor: '#F2994A',
    backgroundColor: '#F2994A',
  },
  sizeText: {
    fontSize: 16,
    color: '#333',
  },
  sizeTextSelected: {
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#F2994A',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetailScreen;
