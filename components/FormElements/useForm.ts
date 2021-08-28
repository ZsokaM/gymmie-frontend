import { useEffect, useState } from 'react'
import { currentYear, getWeek } from '../../lib/dateHelpers'

export const initValue = {
  name: '',
  freeSpots: '',
  available: 1,
  year: currentYear,
  week: getWeek(),
  day: '',
  startTime: '',
  teacher: '',
  duration: 60,
}

export interface FormProps {
  [key: string]: string | number
}

export default function useForm(initial: FormProps) {
  const [inputs, setInputs] = useState(initial)
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
      Object.entries(inputs).map(([key]) => [key, '']),
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
