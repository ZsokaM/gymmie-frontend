import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import {
  FieldSetStyle,
  FormHeader,
  FormStyle,
  FormButton,
} from '../FormElements/formElementsStyle'
import useForm from '../FormElements/useForm'
import { getWeek, currentYear } from '../../lib/dateHelpers'
import { ALL_CLASSES_QUERY } from '../Schedule/Schedule'
import CreateUpdateFormFieldset from './CreateUpdateFormFieldset'
import DisplayError from '../Layout/ErrorMessage'

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
  const [createSportClass, { loading, error }] = useMutation(
    CREATE_SPORTCLASS_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_CLASSES_QUERY }],
    },
  )

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await createSportClass()
    clearForm()
    resetForm()
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
