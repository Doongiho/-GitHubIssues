import styles from "./Pageination.module.css"
import cx from "clsx"

export default function Pageination({
  currentPage,
  maxPage,
  onClickPageButton,
}) {
  return (
    <div>
      <button
        className={cx(styles.button, styles.blueButton)}
        disabled={currentPage === 1}
      >
        {`< Previous`}
      </button>
      {new Array(maxPage).fill(null).map((_, idx) => (
        <PageButton
          key={idx}
          number={idx + 1}
          onClick={onClickPageButton}
          selected={idx + 1 === currentPage}
        />
      ))}
      <button
        className={cx(styles.button, styles.blueButton)}
        disabled={currentPage === maxPage}
      >{`Next >`}</button>
    </div>
  )
}

function PageButton({ onClick, number, selected }) {
  return (
    <button
      className={cx(styles.button, { [styles.selected]: selected })}
      onClick={() => onClick(number)}
    >
      {number}
    </button>
  )
}
