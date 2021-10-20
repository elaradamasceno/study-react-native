import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './style';

type ListHeaderProps = {
  title: string
  subtitle: string
}

export function ListHeader({ title, subtitle } : ListHeaderProps) {
  return (
    <View style={styles.conatainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}