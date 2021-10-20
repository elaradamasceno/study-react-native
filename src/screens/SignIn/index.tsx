import React, { useState } from 'react';
import { 
  Image,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { ButtonIcon } from '../../components/ButtonIcon';

import IllustrationImg from '../../assets/illustration.png'
import { styles } from './style';

export function SignIn(){
  const navigation = useNavigation();
 
  const handleSignIn = () => {
    navigation.navigate('Home')
  }

  return(
    <View style={styles.container}>
      <Image source={IllustrationImg} style={styles.image} resizeMode="stretch"/>

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize suas {'\n'}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon 
          title="Entrar com o discord" 
          activeOpacity={0.7} 
          onPress={handleSignIn}
        />
      </View>
    </View>
  )
}