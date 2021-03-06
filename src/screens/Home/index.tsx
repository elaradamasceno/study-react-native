import React, { useState} from 'react';
import { FlatList, View } from 'react-native';
import { Appointment } from '../../components/Appointment';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';

import { styles } from './style';

export function Home() {
  const [category, setCategory] = useState<string>('');

  const appointments = [
    {
      id: '1', 
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '20/10 as 20h40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2', 
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '20/10 as 20h40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory('') :  setCategory(categoryId);
  }

  return (
    <View style={styles.conatainer}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <CategorySelect 
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="6"/>

        <FlatList 
          data={appointments} 
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Appointment data={item} />
          )}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </View>
    </View>
  )
}