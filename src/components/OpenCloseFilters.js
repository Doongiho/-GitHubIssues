import styles from "./OpenClosedFilters.module.css"
import cx from "clsx"

export default function OpenClosedFilters({ isOpenMode, onClickMode }) {
  return (
    <>
      <OpenCloseFilter
        state="Open"
        selected={isOpenMode}
        onClick={() => onClickMode(true)}
      />
      <OpenCloseFilter
        state="Close"
        selected={!isOpenMode}
        onClick={() => onClickMode(false)}
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
