import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ResourceCard from './src/components/ResourceCard';
import { Resource } from './src/types';

export default function App() {
  const resource: Resource = {
    id: 1,
    title: 'Практика роботи з об\'єктами та масивами у TypeScript',
    minutes: 45,
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screen}>
        <Text style={styles.heading}>Мій каталог навчання</Text>
        <View style={styles.row}>
          <Image
            source={require('./assets/resource.png')}
            style={styles.image}
            resizeMode="contain"
            accessibilityLabel="Навчальний ресурс"
          />
          <View style={{ flex: 1 }}>
            <ResourceCard resource={resource} />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  image: {
    width: 64,
    height: 64,
  },
});