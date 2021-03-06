import React from 'react';
import { ScrollView, SectionList } from 'react-native';

import { categories } from '../../utils/categories';
import { Category } from '../Category';
import { styles } from './style';

type CategorySelectProps = {
  categorySelected: string
  setCategory: (categoryId: string) => void
}

export function CategorySelect({ categorySelected, setCategory } : CategorySelectProps) {
  return (
    <ScrollView 
      horizontal
      style={styles.conatainer}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 40}}
    >
      {
        categories.map(category => (
          <Category 
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected}
            onPress={() => setCategory(category.id)}
          />
        ))
      }
    </ScrollView>
  )
}