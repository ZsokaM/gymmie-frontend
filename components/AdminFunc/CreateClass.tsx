import { useMutation } from '@apollo/client'
import styled from 'styled-components'
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
  const [createSportClass, { data, loading, error }] = useMutation(
    CREATE_SPORTCLASS_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_CLASSES_QUERY }],
    },
  )

  const onSubmit = async (e) => {
    e.preventDefault()

    await createSportClass()
    clearForm()
    resetForm()
  }

  //todo: export form elements into separate reusable components + style
  return (
    <FormStyle onSubmit={onSubmit}>
      {/* todo: add Error component in case there is an error during submission etc */}
      <FieldSetStyle disabled={loading}>
        <FormHeader>Create a Class</FormHeader>
        <CreateUpdateFormFieldset inputs={inputs} handleChange={handleChange} />
        <FormButton>Add Class</FormButton>
      </FieldSetStyle>
    </FormStyle>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: 60%;
  display: flex;
`
