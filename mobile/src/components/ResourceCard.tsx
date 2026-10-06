import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Resource } from '../types';

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  function handleToggle() {
    setIsFavorite(previous => !previous);
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{resource.title}</Text>
      <Text style={styles.meta}>Тривалість: {resource.minutes} хв</Text>
      
      {/* Статус обраного */}
      <Text style={styles.status}>
        Статус: {isFavorite ? 'В обраному' : 'Не в обраному'}
      </Text>

      <Pressable
        onPress={handleToggle}
        style={styles.button}
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>
          {isFavorite ? 'Прибрати з обраного' : 'Додати в обране'}
        </Text>
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
    marginBottom: 8,
  },
  status: {
    fontSize: 15,
    fontWeight: '500',
    color: '#007AFF',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    minHeight: 48,
    marginTop: 4,
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