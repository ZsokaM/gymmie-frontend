import gql from 'graphql-tag'
import { useMutation, useQuery } from '@apollo/client'
import styled from 'styled-components'
import useForm from '../FormElements/useForm'
import CreateUpdateFormFieldset from './CreateUpdateFormFieldset'
import {
  FormButton,
  FormStyle,
  FormHeader,
  FieldSetStyle,
} from '../FormElements/formElementsStyle'

export const SINGLE_SPORTCLASS_QUERY = gql`
  query SINGLE_SPORTCLASS_QUERY($id: ID!) {
    SportClass(where: { id: $id }) {
      name
      freeSpots
      available
      year
      week
      day
      startTime
      teacher
      duration
    }
  }
`

const UPDATE_SPORTCLASS_MUTATION = gql`
  mutation UPDATE_SPORTCLASS_MUTATION(
    $id: ID!
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
    updateSportClass(
      id: $id
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
      name
      freeSpots
      available
      year
      week
      day
      startTime
      teacher
      duration
    }
  }
`
export default function UpdateClass({ id }) {
  const { data, loading, error } = useQuery(SINGLE_SPORTCLASS_QUERY, {
    variables: { id },
  })

  const [
    updateSportClass,
    { data: updateData, loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_SPORTCLASS_MUTATION)

  const { inputs, handleChange } = useForm(data?.SportClass)

  const onSubmit = async (e) => {
    e.preventDefault()
    const res = await updateSportClass({
      variables: {
        id,
        name: inputs.name,
        freeSpots: inputs.freeSpots,
        available: inputs.available,
        year: inputs.year,
        week: inputs.week,
        day: inputs.day,
        startTime: inputs.startTime,
        teacher: inputs.teacher,
        duration: inputs.duration,
      },
    })
  }
  if (updateLoading) return <p>loading...</p>
  //todo: export form elements into separate reusable components + style
  return (
    <FormStyle onSubmit={onSubmit}>
      {/* todo: add Error component in case there is an error during submission etc */}
      <FieldSetStyle disabled={loading}>
        <FormHeader>Update class</FormHeader>
        <CreateUpdateFormFieldset inputs={inputs} handleChange={handleChange} />
        <FormButton>Update</FormButton>
      </FieldSetStyle>
    </FormStyle>
  )
}
