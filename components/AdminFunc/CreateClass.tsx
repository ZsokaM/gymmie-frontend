import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import {
  FieldSetStyle,
  FormHeader,
  FormStyle,
} from '../FormElements/formElementsStyle'
import { FormButton } from '../styles/ButtonStyle'
import useForm from '../FormElements/useForm'
import { getWeek, currentYear } from '../../lib/dateHelpers'
import { ALL_CLASSES_QUERY } from '../Schedule/Schedule'
import CreateUpdateFormFieldset from './CreateUpdateFormFieldset'
import DisplayError from '../Layout/DisplayError'
import { SportClassInterface } from '../../lib/gymmieInterfaces'

const CREATE_SPORTCLASS_MUTATION = gql`
  mutation CREATE_SPORTCLASS_MUTATION(
    $name: String!
    $freeSpots: Int!
    $available: Int!
    $year: Int!
    $week: Int!
    $day: Int!
    $startTime: String!
    $teacher: String!
    $duration: Int!
  ) {
    createSportClass(
      data: {
        name: $name
        freeSpots: $freeSpots
        available: $available
        year: $year
        week: $week
        day: $day
        startTime: $startTime
        teacher: $teacher
        duration: $duration
      }
    ) {
      id
    }
  }
`

export default function CreateClass() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: '',
    freeSpots: 10,
    available: 1,
    year: currentYear,
    week: getWeek(),
    day: '',
    startTime: '8',
    teacher: '',
    duration: 60,
  })

  //function that fires the mutations and what we get back from it
  const [createSportClass, { loading, error }] = useMutation<
    SportClassInterface
  >(CREATE_SPORTCLASS_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: ALL_CLASSES_QUERY }],
  })

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await createSportClass()
      clearForm()
      resetForm()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <FormStyle onSubmit={onSubmit}>
      <DisplayError error={error} />
      <FieldSetStyle disabled={loading}>
        <FormHeader>Create a Class</FormHeader>
        <CreateUpdateFormFieldset inputs={inputs} handleChange={handleChange} />
        <FormButton>Add Class</FormButton>
      </FieldSetStyle>
    </FormStyle>
  )
}
