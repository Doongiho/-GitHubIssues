import styles from "./OpenClosedFilters.module.css"
import cx from "clsx"

export default function OpenClosedFilters({ isOpenMode, onClickMode }) {
  return (
    <>
      <OpenCloseFilter
        state="Open"
        selected={isOpenMode}
        onClick={() => onClickMode("open")}
      />
      <OpenCloseFilter
        state="Close"
        selected={!isOpenMode}
        onClick={() => onClickMode("closed")}
      />
    </>
  )
}

function OpenCloseFilter({ state, onClick, selected }) {
  return (
    <span
      role="button"
      className={cx(styles.textFilter, { [styles.selected]: selected })}
      onClick={onClick}
    >
      {state}
    </span>
  )
}
