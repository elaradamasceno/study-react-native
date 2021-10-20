import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { View, Text} from 'react-native';

import { GuildIcon } from '../GuildIcon';
import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'
import { categories } from '../../utils/categories';

import { styles } from './style';
import { theme } from '../../global/styles/theme';

export type GuildProps = {
  id: string
  name: string
  icon: null
  owner: boolean
}

export type AppointmentType = {
  id: string
  guild: GuildProps
  category: string
  date: string
  description: string
}

type AppointmentProps = RectButtonProps & {
  data: AppointmentType,
}

export function Appointment({ data, ...rest} : AppointmentProps) {
  const [category] = categories.filter(item => item.id === data.category);

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{ data.guild.name }</Text>

            <Text style={styles.category}>{ category.title }</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSvg fill={data.guild.owner ? theme.colors.primary : theme.colors.on}/>

              <Text style={[
                styles.player, {color: data.guild.owner ? theme.colors.primary : theme.colors.on}
              ]}>
                {data.guild.owner ? 'Anfitrião' :  'Visitante'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  )
}