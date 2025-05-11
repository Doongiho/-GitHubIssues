import { useRef } from "react"
import styles from "./CreateIssuse.module.css"
import Button from "../components/Button"
import TextField from "../components/TextField"
import cx from "clsx"

export default function CreateIssuse() {
  const ref = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    if (e.target.elements.title.value === "") {
      alert("타이틀을 입력해주세요")
      ref.current.focus()
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.avatar}></div>
      <div className={cx(styles.inputWrapper, styles.border)}>
        <form onSubmit={handleSubmit}>
          <TextField ref={ref} name="title" placeholder="title" />
          <TextField
            type="textarea"
            name="body"
            placeholder="Leave a comment"
          />
          <div className={styles.buttonWrapper}>
            <Button
              ref={ref}
              type="submit"
              style={{
                fontSize: "14px",
                backgroundColor: "green",
                color: "white",
              }}
            >
              New Issue
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
