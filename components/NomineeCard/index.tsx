import Image from 'next/image'

import styles from './index.module.css'

export type NomineeInfo = {
  id: string
  photoUrL: string
  title: string
}

interface NomineeCardProps {
  isSelected: boolean
  item: NomineeInfo
  onSelect: (item: NomineeInfo) => void
}

const NomineeCard = ({ isSelected, item, onSelect }: NomineeCardProps) => {
  return (
    <div className={`${styles.nomineeCard} ${isSelected ? styles.active : ''}`}>
      <p>{item.title}</p>

      <div className={styles.photoWrapper}>
        <Image
          alt={item.id} 
          blurDataURL={`${item.photoUrL}?q=10`}
          objectFit="cover"
          placeholder="blur"
          src={item.photoUrL}
          width={110}
          height={110}
          />
      </div>

      <button
        className={`${styles.selectBtn} ${isSelected ? styles.selected : ''}`}
        disabled={isSelected}
        onClick={() => onSelect(item)}
      >
        {isSelected ? 'Selected': 'Select' }
      </button>
    </div>
  );
}

export default NomineeCard