import { useMutation, useQuery, useLazyQuery } from '@apollo/client'
import { SINGLE_SPORTCLASS_QUERY } from '../../lib/APIs/SportClassQueries'
import { UPDATE_SPORTCLASS_MUTATION } from '../../lib/APIs/SportClassMutations'
import useForm from '../FormElements/useForm'
import CreateUpdateFormFieldset from './CreateUpdateFormFieldset'
import {
  FormStyle,
  FormHeader,
  FieldSetStyle,
} from '../FormElements/formElementsStyle'
import { FormButton } from '../styles/ButtonStyle'
import DisplayError from '../Layout/DisplayError'
import { currentYear, getWeek } from '../../lib/dateHelpers'

type UpdateClassProps = {
  id?: string
}
export default function UpdateClass({ id }: UpdateClassProps) {
  const { data, loading, error } = useQuery(SINGLE_SPORTCLASS_QUERY, {
    variables: { id },
  })

  const { inputs, handleChange } = useForm(
    data?.SportClass || {
      name: '',
      freeSpots: '',
      available: 1,
      year: currentYear,
      week: getWeek(),
      day: '',
      startTime: '',
      teacher: '',
      duration: 60,
    },
  )

  const [
    updateSportClass,
    { data: updateData, loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_SPORTCLASS_MUTATION)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await updateSportClass({
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
    } catch (err) {
      console.error(err)
    }
  }
  if (updateLoading) return <p>loading...</p>

  return (
    <FormStyle onSubmit={onSubmit}>
      <DisplayError error={error | updateError} />
      <FieldSetStyle disabled={loading}>
        <FormHeader>Update class</FormHeader>
        <CreateUpdateFormFieldset inputs={inputs} handleChange={handleChange} />
        <FormButton>Update</FormButton>
      </FieldSetStyle>
    </FormStyle>
  )
}
