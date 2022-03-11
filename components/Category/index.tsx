import React, { useState } from 'react'

import NomineeCard, { NomineeInfo } from '../NomineeCard'
import styles from './index.module.css'

export type CategoryInfo = {
  id: string
  items: NomineeInfo[]
  title: string
}

interface CateogryProps {
  category: CategoryInfo
  onNomineeSelect: ({ id, item}: {id: string, item: NomineeInfo }) => void
}

const Category = ({ category, onNomineeSelect }: CateogryProps) => {
  const [selectedId, setSelectId] = useState<string>('');

  const handleSelect = (item: NomineeInfo) => {
    setSelectId(item.id);
    onNomineeSelect({ id: category.id, item });
  }

  return (
    <div className={styles.pageCategory}>
      <h2>{category.title}</h2>

      <div className={styles.categoryContent}>
        { category.items.map((item: NomineeInfo, ind: number) => (
            <NomineeCard
              key={`${category.id}-${ind}`}
              isSelected={selectedId === item.id}
              item={item}
              onSelect={handleSelect}
            />
          ))}
      </div>
    </div>
  );
};

export default Category