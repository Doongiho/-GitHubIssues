import { useEffect, useRef, useState } from "react"
import styles from "./CreateIssuse.module.css"
import Button from "../components/Button"
import TextField from "../components/TextField"
import cx from "clsx"

export default function CreateIssuse() {
  const inputRef = useRef()
  const textarRef = useRef()
  const [inputValue, setInputValue] = useState({ title: "", body: "" })
  const [errors, setErorrs] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    setIsSubmitting(true)
    const validateResult = validate(inputValue)
    setErorrs(validateResult)

    const refs = { title: inputRef, body: textarRef }
    const errorKeys = Object.keys(validateResult)

    if (errorKeys.length !== 0) {
      const key = errorKeys[0]
      alert(validateResult[key])
      refs[key].current.focus()

      setIsSubmitting(false)
      return
    }
    if (errorKeys.length === 0) {
      console.log("성공")
    }
  }

  function onChange(e) {
    const { name, value } = e.target
    setInputValue({ ...inputValue, [name]: value })
  }

  return (
    <div className={styles.container}>
      <div className={styles.avatar}></div>
      <div className={cx(styles.inputWrapper, styles.border)}>
        <form onSubmit={handleSubmit}>
          <TextField
            ref={inputRef}
            name="title"
            placeholder="title"
            value={inputValue.inputValue}
            onChange={onChange}
            error={errors.title}
          />
          <TextField
            ref={textarRef}
            type="textarea"
            name="body"
            placeholder="Leave a comment"
            value={inputValue.inputValue}
            onChange={onChange}
            error={errors.body}
          />
          <div className={styles.buttonWrapper}>
            <Button
              type="submit"
              style={{
                fontSize: "14px",
                backgroundColor: "green",
                color: "white",
              }}
              disabled={isSubmitting}
            >
              New Issue
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

function validate(values) {
  let errors = {}

  if (values.title === "") {
    errors = { title: "타이틀의 값은 필수입니다." }
  }
  return errors
}
