import { useEffect, useState } from "react"
import { useSearchParams, Link } from "react-router-dom"
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
  const maxPage = 10

  const [searchParams, setSearchParams] = useSearchParams()
  const page = parseInt(searchParams.get("page") ?? "1", 10)
  const state = searchParams.get("state")

  async function getData(params) {
    const data = await axios.get(`${GITHUB_API}/repos/facebook/react/issues`, {
      params,
    })
    setList(data.data)
  }

  useEffect(() => {
    getData(searchParams)
  }, [searchParams])

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Link to="/new" className={styles.Link}>
            <Button
              style={{
                fontSize: "14px",
                backgroundColor: "green",
                color: "white",
              }}
            >
              New Issue
            </Button>
          </Link>
        </div>
        <OpenClosedFilters
          isOpenMode={state !== "closed"}
          onClickMode={(state) => setSearchParams({ state })}
        />
        <div className={styles.container}>
          <ListItemLayout className={styles.listFilter}>
            <ListFilter
              onChangeFilter={(params) => {
                setSearchParams(params)
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
