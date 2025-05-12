import { useState } from "react"

export function useForm({
  initialValues,
  validate,
  refs,
  onSuccess,
  onErrors,
  onSubmit,
}) {
  const [inputValue, setInputValue] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  function onChange(e) {
    const { name, value } = e.target
    setInputValue({ ...inputValue, [name]: value })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    setIsSubmitting(true)
    const validateResult = validate(inputValue)
    setErrors(validateResult)

    const errorKeys = Object.keys(validateResult)

    if (errorKeys.length !== 0) {
      const key = errorKeys[0]
      alert(validateResult[key])
      onErrors()
      refs[key].current.focus()
      setIsSubmitting(false)
      return
    }
    if (errorKeys.length === 0) {
      await onSubmit()
      return
    }
  }

  return {
    inputValue,
    onChange,
    isSubmitting,
    errors,
    handleSubmit,
  }
}
