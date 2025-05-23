import { useRef } from "react"
import { replace, useNavigate } from "react-router-dom"
import cx from "clsx"
import axios from "axios"

import styles from "./CreateIssuse.module.css"
import Button from "../components/Button"
import TextField from "../components/TextField"
import { GITHUB_API } from "../api"
import { useForm } from "../hooks"

export default function CreateIssuse() {
  const inputRef = useRef()
  const textarRef = useRef()
  const navigate = useNavigate()

  const { handleSubmit, inputValue, onChange, errors, isSubmitting } = useForm({
    initialValues: { title: "", body: "" },
    onSubmit: async () =>
      await axios.post(
        `${GITHUB_API}/repos/Doongiho/-GitHubIssues/issues`,
        inputValue,
        {
          headers: {
            Authorization: process.env.REACT_APP_GITHUB_TOKEN,
            "Content-Type": "application/json",
          },
        },
      ),
    onErrors: () => {},
    validate,
    refs: { title: inputRef, body: textarRef },
    onSuccess: (result) => {
      console.log({ result })
      navigate("/", { replace: true })
    },
  })

  return (
    <div className={styles.container}>
      <div className={styles.avatar}></div>
      <div className={cx(styles.inputWrapper, styles.border)}>
        <form onSubmit={handleSubmit}>
          <TextField
            ref={inputRef}
            name="title"
            placeholder="title"
            value={inputValue.title}
            onChange={onChange}
            error={errors.title}
          />
          <TextField
            ref={textarRef}
            type="textarea"
            name="body"
            placeholder="Leave a comment"
            value={inputValue.body}
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
  const errors = {}
  if (values.title === "") {
    errors.title = "타이틀의 값은 필수입니다."
  }
  return errors
}
