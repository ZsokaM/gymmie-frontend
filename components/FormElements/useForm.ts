import { useEffect, useState } from 'react'
import { InputsProps } from '../../lib/gymmieInterfaces'

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState<InputsProps>(initial)
  const initialValues = Object.values(initial).join('')

  useEffect(() => {
    setInputs(initial)
  }, [initialValues])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { value, name, type } = e.target
    const numbersAccepted = ['duration', 'day', 'available']
    const isNumber = numbersAccepted.includes(name) || type === 'number'

    setInputs({
      ...inputs,
      [name]: isNumber ? +value : value,
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
