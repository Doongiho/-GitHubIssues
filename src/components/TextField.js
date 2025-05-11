import { useRef, forwardRef } from "react"
import styles from "./TextField.module.css"
import cx from "clsx"

export default forwardRef(function TextField(
  { type = "input", name, placeholder },
  ref,
) {
  return type === "input" ? (
    <input
      name={name}
      ref={ref}
      className={cx(styles.input, styles.border)}
      placeholder="Title"
    ></input>
  ) : (
    <textarea
      name={name}
      ref={ref}
      className={cx(styles.input, styles.textarea, styles.border)}
      placeholder={placeholder}
    ></textarea>
  )
})
