import React from 'react'
import Image from 'next/image'

import styles from './index.module.css'

interface LayoutProps {
  title: string
  onShow: (status: boolean) => void
  children: React.ReactNode
}

const Modal = ({ title, onShow, children }: LayoutProps) => {
  return (
    <div className={styles.modalBox}>
      <div className={styles.modalContent}>
        <div
          className={styles.btnClose}
          onClick={() => onShow(false)}
        >
          <Image 
            alt="Close Button"
            src="/close.png" 
            width={16} 
            height={16}  
            />
        </div>

        <h2>{title}</h2>

        {children}        
      </div>
    </div>
  );
}

export default Modal