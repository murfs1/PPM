import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Link, useNavigation} from '@react-navigation/native'; // Menggunakan Link untuk navigasi

const StartScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../image/STARTSCREEN/onboarding.png')} // Pastikan jalur gambar benar
        style={styles.backgroundImage}>
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.title}>
            Coffee so good, your taste buds will love it.
          </Text>
          <Text style={styles.subtitle}>
            The best grain, the finest roast, the powerful flavor.
          </Text>
          <Link to="/Home" style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay gelap
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 40,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#F2994A',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    textAlign: 'center', // Pusatkan teks di tombol
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StartScreen;
