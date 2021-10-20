import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import { Image, View } from 'react-native';

import { styles } from './style';
import { theme } from '../../global/styles/theme';

type AvatarProps = {
  urlImage: string,
}

export function Avatar({ urlImage } : AvatarProps) {
  return (
    <View>
      <LinearGradient 
        style={styles.container}
        colors={[theme.colors.secondary50, theme.colors.secondary70]}
      >
        <Image 
          source={{ uri: urlImage }} 
          style={styles.avatar}
        />
      </LinearGradient>
    </View>
  )
}