import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const OrderScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const [isDelivery, setIsDelivery] = useState(true);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Cash');

  const handleQuantityChange = (action: string) => {
    if (action === 'increase') {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleOrderType = (type: string) => {
    setIsDelivery(type === 'delivery');
  };
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
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
      {/* Order Type Selection */}
      <View style={styles.orderTypeContainer}>
        <TouchableOpacity
          style={[
            styles.orderTypeButton,
            isDelivery && styles.selectedOrderType,
          ]}
          onPress={() => handleOrderType('delivery')}>
          <Text
            style={
              isDelivery ? styles.selectedOrderTypeText : styles.orderTypeText
            }>
            Deliver
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.orderTypeButton,
            !isDelivery && styles.selectedOrderType,
          ]}
          onPress={() => handleOrderType('pickup')}>
          <Text
            style={
              !isDelivery ? styles.selectedOrderTypeText : styles.orderTypeText
            }>
            Pick Up
          </Text>
        </TouchableOpacity>
      </View>

      {/* Delivery Address */}
      {isDelivery && (
        <View style={styles.deliveryAddressContainer}>
          <Text style={styles.addressTitle}>Delivery Address</Text>
          <Text style={styles.address}>
            Jl. Kpg Sutoyo No. 620, Bilzen, Tanjungbalai
          </Text>
          <View style={styles.addressActions}>
            <TouchableOpacity style={styles.addressButton}>
              <Text style={styles.addressButtonText}>Edit Address</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addressButton}>
              <Text style={styles.addressButtonText}>Add Note</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Product Section */}
      <View style={styles.productContainer}>
        <Image
          source={require('../../image/Torabika.png')}
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>Cappuccino</Text>
          <Text style={styles.productDescription}>with Chocolate</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => handleQuantityChange('decrease')}>
              <Text style={styles.quantityButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={() => handleQuantityChange('increase')}>
              <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Discount Section */}
      <View style={styles.discountContainer}>
        <Text style={styles.discountText}>1 Discount is applied</Text>
      </View>

      {/* Payment Summary */}
      <View style={styles.paymentSummaryContainer}>
        <Text style={styles.paymentTitle}>Payment Summary</Text>
        <View style={styles.paymentRow}>
          <Text style={styles.paymentLabel}>Price</Text>
          <Text style={styles.paymentValue}>$4.53</Text>
        </View>
        <View style={styles.paymentRow}>
          <Text style={styles.paymentLabel}>Delivery Fee</Text>
          <Text style={styles.paymentValue}>$2.0</Text>
        </View>
        <View style={styles.paymentRow}>
          <Text style={styles.paymentLabel}>Discount</Text>
          <Text style={styles.paymentValue}>-$1.0</Text>
        </View>
        <View style={styles.paymentRow}>
          <Text style={styles.totalPaymentLabel}>Total Payment</Text>
          <Text style={styles.totalPaymentValue}>$5.53</Text>
        </View>
      </View>

      {/* Payment Method */}
      <View style={styles.paymentMethodContainer}>
        <Text style={styles.paymentMethodTitle}>Payment Method</Text>
        <TouchableOpacity onPress={() => setSelectedPaymentMethod('Cash')}>
          <View style={styles.paymentMethod}>
            <Text style={styles.paymentMethodText}>Cash</Text>
            <Text style={styles.paymentMethodValue}>$5.53</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Order Button */}
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  orderTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  orderTypeButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#F2994A',
    borderWidth: 1,
    alignItems: 'center',
  },
  selectedOrderType: {
    backgroundColor: '#F2994A',
  },
  orderTypeText: {
    color: '#333',
  },
  selectedOrderTypeText: {
    color: '#fff',
  },
  deliveryAddressContainer: {
    marginTop: 20,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 14,
    marginTop: 5,
  },
  addressActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  addressButton: {
    borderColor: '#F2994A',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
  addressButtonText: {
    color: '#F2994A',
  },
  productContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 20,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    fontSize: 24,
    width: 30,
    textAlign: 'center',
    color: '#F2994A',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  discountContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#F9FAFB',
    borderRadius: 5,
  },
  discountText: {
    color: '#F2994A',
    fontWeight: 'bold',
  },
  paymentSummaryContainer: {
    marginTop: 20,
  },
  paymentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  paymentLabel: {
    fontSize: 14,
    color: '#666',
  },
  paymentValue: {
    fontSize: 14,
  },
  totalPaymentLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalPaymentValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentMethodContainer: {
    marginTop: 20,
  },
  paymentMethodTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentMethod: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  paymentMethodText: {
    fontSize: 14,
  },
  paymentMethodValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  orderButton: {
    backgroundColor: '#F2994A',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 30,
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  backText: {
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  favoriteText: {
    fontSize: 24,
    color: 'red',
  },
});

export default OrderScreen;
