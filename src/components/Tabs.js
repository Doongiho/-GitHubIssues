import { useState } from "react"
import styles from "./Tab.module.css"
import cs from "clsx"

const TabList = ["Code", "Issues", "Pull Request"]

export default function Tabs() {
  const [selectedTabInx, setSelectedTabInx] = useState(0)
  return (
    <ul className={styles.tabList}>
      {TabList.map((tab, idx) => (
        <Tab
          key={`${idx}`}
          title={tab}
          selected={selectedTabInx === idx}
          onClick={() => setSelectedTabInx(idx)}
        />
      ))}
    </ul>
  )
}

function Tab({ title, selected, onClick, number }) {
  return (
    <li>
      <button
        onClick={onClick}
        className={cs(styles.tab, { [styles.selected]: selected })}
      >
        <span>{title}</span>
        {number && <div className={styles.circle}>{number}</div>}
      </button>
    </li>
  )
}
