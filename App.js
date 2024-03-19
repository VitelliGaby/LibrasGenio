import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const signLanguageGreetingArray = [
  '🤟', '🤟', '🤟', '🤟', '🤟',
];

const greeting = 'Olá, Bem-vindo!';

const SignLanguageGreeting = () => {
  let signLanguageGreetingString = '';

  for (let i = 0; i < greeting.length; i++) {
    signLanguageGreetingString += signLanguageGreetingArray[i % signLanguageGreetingArray.length];
  }

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{greeting}</Text>
      <Text style={styles.signLanguageGreeting}>
        {signLanguageGreetingString}
      </Text>
      <Ionicons name="happy-outline" size={50} color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b5c8f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  signLanguageGreeting: {
    fontSize: 32,
    marginBottom: 16,
  },
});

export default SignLanguageGreeting;