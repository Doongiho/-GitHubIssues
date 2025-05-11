import { useLocation, Link } from "react-router-dom"
import styles from "./Tab.module.css"
import cs from "clsx"

const TabList = [
  { name: "Code", pathname: "/code" },
  { name: "Issues", pathname: "/issue" },
  { name: "Pull Request", pathname: "/pulls" },
  { name: "Actions", pathname: "/actions" },
  { name: "Projects", pathname: "/projects" },
  { name: "Security", pathname: "/security" },
]

export default function Tabs() {
  const { pathname } = useLocation()

  return (
    <ul className={styles.tabList}>
      {TabList.map((tab, idx) => (
        <Tab
          key={idx}
          item={tab}
          selected={(pathname === "/" ? "/issue" : pathname) === tab.pathname}
        />
      ))}
    </ul>
  )
}

function Tab({ item, selected, onClick, number }) {
  return (
    <li>
      <Link to={item.pathname} className={styles.link}>
        <button
          onClick={onClick}
          className={cs(styles.tab, { [styles.selected]: selected })}
        >
          <span>{item.name}</span>
          {number && <div className={styles.circle}>{number}</div>}
        </button>
      </Link>
    </li>
  )
}
