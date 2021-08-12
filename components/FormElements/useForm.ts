import { useEffect, useState } from 'react'

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial)
  const initialValues = Object.values(initial).join('')

  useEffect(() => {
    setInputs(initial)
  }, [initialValues])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    let { value, name, type } = e.target
    if (type === 'number') {
      value = parseInt(value)
    }
    if (name === 'duration' || name === 'day') {
      value = parseInt(value)
    }
    if (name === 'available') {
      value === 'true' ? (value = true) : (value = false)
    }

    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  function resetForm() {
    setInputs(initial)
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, '']),
    )
    setInputs(blankState)
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  }
}
