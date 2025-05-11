import styles from "./CreateIssuse.module.css"
import Button from "../components/Button"
import cx from "clsx"

export default function CreateIssuse() {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}></div>
      <div className={cx(styles.inputWrapper, styles.border)}>
        <input
          className={cx(styles.input, styles.border)}
          placeholder="Title"
        ></input>
        <textarea
          className={cx(styles.input, styles.textarea, styles.border)}
          placeholder="Leave a comment"
        ></textarea>
        <div className={styles.buttonWrapper}>
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
      </div>
    </div>
  )
}
