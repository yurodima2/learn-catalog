import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Resource } from '../types';

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  function handlePress() {
    console.log('Натискання перевірено');
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{resource.title}</Text>
      <Text style={styles.meta}>Тривалість: {resource.minutes} хв</Text>
      
      <Pressable
        onPress={handlePress}
        style={styles.button}
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Перевірити кнопку</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 6,
  },
  meta: {
    fontSize: 16,
    color: '#666666',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    minHeight: 48,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});