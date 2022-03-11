import React, { useState } from 'react'

import Category, { CategoryInfo } from 'components/Category'
import { NomineeInfo  } from 'components/NomineeCard'
import Modal from 'components/Modal'
import styles from './index.module.css'

type BallotsProps = {
  ballotData: CategoryInfo[];
}

export interface NomineeObj {
  [key: string]: NomineeInfo;
}

const Ballots = ({ ballotData }: BallotsProps ) => {
  const [nomineeList, setNomineeList] = useState<NomineeObj>({});
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleNominee = ({ id, item }: { id: string, item: NomineeInfo }) => {
    setNomineeList({ ...nomineeList, [id]: item });
  }

  return (
    <>
      <div className={styles.ballotsView}>
        <h1>AWARDS 2021</h1>

        { ballotData?.map((category: CategoryInfo, ind: number) => (
            <Category
              key={`category-${ind}`}
              category={category}
              onNomineeSelect={handleNominee}
            />
          ))}

        <div className={styles.btnWrapper}>
          <button 
            className={styles.submitBtn} 
            disabled={ballotData.length !== Object.keys(nomineeList).length}
            onClick={() => setShowModal(true)}
          >
            submit
          </button>
        </div>
      </div>

      { showModal && (
          <Modal title="success" onShow={setShowModal}>
            { nomineeList &&
                Object.keys(nomineeList).map((id: string) => (
                  <div key={id} className={styles.selectedItem}>
                    <p>
                      <b>{ballotData.filter(movie => movie.id === id)[0].title}:</b> {nomineeList[id].title}
                    </p>
                  </div>
                ))}
          </Modal>
      )}
    </>
  );
};

export default Ballots