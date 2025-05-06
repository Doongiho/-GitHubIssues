import { useEffect, useState } from "react"
import styles from "./ListContainer.module.css"
import Button from "./components/Button"
import ListItem from "./components/ListItem"
import ListItemLayout from "./components/ListItemLayout"
import Modal from "./components/Modal"
import Pageination from "./components/Pageination"
import cx from "clsx"

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open")
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    console.log({ inputValue })
  }, [inputValue])

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            style={{
              fontSize: "14px",
              backgroundColor: "green",
              color: "white",
            }}
          >
            New Issue
          </Button>
        </div>
        <OpenClosedFilters />
        <ListItemLayout className={styles.listFilter}>
          <ListFilter onChangeFilter={(filteredData) => {}} />
        </ListItemLayout>
        <div className={styles.container}>
          {list.map((listItem, index) => (
            <ListItem
              key={index}
              badges={[
                {
                  color: "red",
                  title: "Bug",
                },
              ]}
            />
          ))}
        </div>
      </div>
      <div className={styles.PageinationContainer}>
        <Pageination
          maxPage={10}
          currentPage={page}
          onClickPageButton={(number) => setPage(number)}
        />
      </div>
    </>
  )
}

function ListFilter({ onChangeFilter }) {
  return (
    <>
      <div className={styles.filterLists}>
        <ListFilterItem>Author</ListFilterItem>
        <ListFilterItem>Label</ListFilterItem>
        <ListFilterItem>Projects</ListFilterItem>
        <ListFilterItem>Milestones</ListFilterItem>
        <ListFilterItem>Assignee</ListFilterItem>
        <ListFilterItem>Sort</ListFilterItem>
      </div>
    </>
  )
}
function ListFilterItem({ children, onChangeFilter }) {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className={styles.filterItem}>
      <span role="button" onClick={() => setShowModal(true)}>
        {children} ▾
      </span>
      <div className={styles.modalContainer}>
        <Modal
          opened={showModal}
          onClose={() => setShowModal(false)}
          placeholder="Filter labels"
          searchDataList={["Bug", "Labels", "Apple"]}
          onClickCell={() => {
            onChangeFilter()
          }}
        />
      </div>
    </div>
  )
}

function OpenClosedFilters() {
  const [isOpenMode, setIsOpenMode] = useState(true)

  const openModeDataSize = 1
  const closeModeDataSize = 2
  return (
    <>
      <OpenCloseFilter
        size={openModeDataSize}
        state="Open"
        selected={isOpenMode}
        onClick={() => setIsOpenMode(true)}
      />
      <OpenCloseFilter
        size={closeModeDataSize}
        state="Close"
        selected={!isOpenMode}
        onClick={() => setIsOpenMode(false)}
      />
    </>
  )
}
function OpenCloseFilter({ size, state, onClick, selected }) {
  return (
    <span
      role="button"
      className={cx(styles.textFilter, { [styles.selected]: selected })}
      onClick={onClick}
    >
      {size} {state}
    </span>
  )
}
