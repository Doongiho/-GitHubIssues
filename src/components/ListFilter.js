import { useState } from "react"
import styles from "./ListFilter.module.css"
import Modal from "./Modal"

export default function ListFilter({ onChangeFilter }) {
  const [showModal, setShowModal] = useState(null)
  const filterList = [
    "Author",
    "Label",
    "Projects",
    "Milestones",
    "Assignee",
    "Sort",
  ]

  return (
    <div className={styles.filterLists}>
      {filterList.map((filter) => (
        <ListFilterItem
          key={filter}
          onClick={() => setShowModal(filter)}
          onClose={() => setShowModal(null)}
          showModal={showModal === filter}
          searchDataList={[]}
        >
          {filter}
        </ListFilterItem>
      ))}
    </div>
  )
}

function ListFilterItem({
  children,
  placeholder,
  searchDataList,
  showModal,
  onClick,
  onClose,
  onChangeFilter,
}) {
  return (
    <div className={styles.filterItem}>
      <span role="button" onClick={onClick}>
        {children} ▾
      </span>
      <div className={styles.modalContainer}>
        <Modal
          title={children}
          opened={showModal}
          onClose={onClose}
          placeholder={placeholder}
          searchDataList={searchDataList}
          onClickCell={(cellInto) => {}}
        />
      </div>
    </div>
  )
}
