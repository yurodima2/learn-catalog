import { Text, View } from 'react-native';
import type { Resource } from '../types';

type ResourceCardProps = {
  resource: Resource;
};

export default function ResourceCard(props: ResourceCardProps) {
  return (
    <View style={{ padding: 16, backgroundColor: '#f9f9f9', borderRadius: 8, margin: 8 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{props.resource.title}</Text>
      <Text style={{ fontSize: 14, color: '#666' }}>{props.resource.minutes} хв</Text>
    </View>
  );
}