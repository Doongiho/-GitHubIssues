import { useEffect, useState } from "react"
import axios from "axios"
import styles from "./ListContainer.module.css"
import Button from "./components/Button"
import ListItem from "./components/ListItem"
import ListItemLayout from "./components/ListItemLayout"
import ListFilter from "./components/ListFilter"
import Pageination from "./components/Pageination"
import cx from "clsx"

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open")
  const [checked, setChecked] = useState(false)
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)
  const maxPage = 10

  async function getData(pageParam) {
    const data = await axios.get(
      "https://api.github.com/repos/facebook/react/issues",
      {
        params: { page: pageParam },
      },
    )
    setList(data.data)
  }

  useEffect(() => {
    getData(page)
  }, [page])

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
        <div className={styles.container}>
          <ListItemLayout className={styles.listFilter}>
            <ListFilter onChangeFilter={(filteredData) => {}} />
          </ListItemLayout>
          {list.map((item) => (
            <ListItem
              key={item.id}
              data={item}
              checked={checked}
              onClickCheckBox={() => setChecked((checked) => !checked)}
            />
          ))}
        </div>
      </div>
      <div className={styles.PageinationContainer}>
        <Pageination
          maxPage={maxPage}
          currentPage={page}
          onClickPageButton={(number) => setPage(number)}
        />
      </div>
    </>
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
