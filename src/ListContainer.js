import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import axios from "axios"
import styles from "./ListContainer.module.css"
import Button from "./components/Button"
import ListItem from "./components/ListItem"
import ListItemLayout from "./components/ListItemLayout"
import ListFilter from "./components/ListFilter"
import Pageination from "./components/Pageination"
import OpenClosedFilters from "./components/OpenCloseFilters"
import { GITHUB_API } from "./api"

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open")
  const [checked, setChecked] = useState(false)
  const [list, setList] = useState([])
  const [isOpenMode, setIsOpenMode] = useState(true)
  const [params, setParams] = useState()
  const maxPage = 10

  const [searchParams, setSearchParams] = useSearchParams()
  const page = parseInt(searchParams.get("page"), 10)

  async function getData(params) {
    const data = await axios.get(`${GITHUB_API}/repos/facebook/react/issues`, {
      params,
    })
    setList(data.data)
  }

  useEffect(() => {
    getData({ page, state: isOpenMode ? "open" : "close", ...params })
  }, [page, isOpenMode, params])

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
        <OpenClosedFilters
          isOpenMode={isOpenMode}
          onClickMode={setIsOpenMode}
        />
        <div className={styles.container}>
          <ListItemLayout className={styles.listFilter}>
            <ListFilter
              onChangeFilter={(params) => {
                setParams(params)
              }}
            />
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
          onClickPageButton={(PageNumber) =>
            setSearchParams({ page: PageNumber })
          }
        />
      </div>
    </>
  )
}
