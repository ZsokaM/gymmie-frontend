import { useMutation } from '@apollo/client'
import {
  FieldSetStyle,
  FormHeader,
  FormStyle,
} from '../FormElements/formElementsStyle'
import { CREATE_SPORTCLASS_MUTATION } from '../../lib/APIs/SportClassMutations'
import { WEEKLY_CLASSES_QUERY } from '../../lib/APIs/SportClassQueries'
import { FormButton } from '../styles/ButtonStyle'
import useForm, { initValue } from '../FormElements/useForm'
import CreateUpdateFormFieldset from './CreateUpdateFormFieldset'
import DisplayError from '../Layout/DisplayError'
import { SportClassInterface } from '../../lib/gymmieInterfaces'

export default function CreateClass() {
  const { inputs, handleChange, resetForm } = useForm(initValue)

  const [createSportClass, { loading, error }] = useMutation<
    SportClassInterface
  >(CREATE_SPORTCLASS_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: WEEKLY_CLASSES_QUERY }],
  })

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await createSportClass()
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
