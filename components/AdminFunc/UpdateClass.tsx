import gql from 'graphql-tag'
import { useMutation, useQuery } from '@apollo/client'
import styled from 'styled-components'
import useForm from '../FormElements/useForm'

import { getWeek, weekDayNames, classHours } from '../../lib/dateHelpers'

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
    <form onSubmit={onSubmit}>
      {/* todo: add Error component in case there is an error during submission etc */}
      <Fieldset disabled={loading}>
        {/* todo: if there's time: add class types schema and use map for options, add CRUD */}
        <label htmlFor="name">
          Class type:
          <input
            type="text"
            id="name"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="freeSpots">
          Number of spots:
          <input
            type="number"
            id="freeSpots"
            name="freeSpots"
            value={inputs.freeSpots}
            onChange={handleChange}
            required
          />
        </label>
        <div>
          <label>
            Status
            <select
              id="available"
              name="available"
              onChange={handleChange}
              required
            >
              <option value="">-- Pick one --</option>
              <option value="1">Available</option>
              <option value="0">Not available</option>
            </select>
          </label>
        </div>
        <label htmlFor="year">
          Year:
          <input
            type="number"
            id="year"
            name="year"
            value={inputs.year}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="week">
          Week of the Year
          <input
            type="number"
            id="week"
            name="week"
            //the onchange works but display wrong
            value={inputs.week}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="day">
          Day
          <select id="day" name="day" onChange={handleChange} required>
            <option value="">-- Pick one --</option>
            {weekDayNames.map((weekday, idx) => (
              <option key={weekday} value={idx}>
                {weekday}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="startTime">
          Starts at:
          <select
            id="startTime"
            name="startTime"
            onChange={handleChange}
            required
          >
            <option value="">-- Pick one --</option>
            {classHours().map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
        </label>
        {/* todo if there's time: add teacher schema and use map for options, add CRUD */}
        <label htmlFor="teacher">
          Teacher
          <select
            id="teacher"
            name="teacher"
            onChange={handleChange}
            value={inputs.teacher}
            required
          >
            <option value="">-- Pick one --</option>
            <option value="Sam">Sam</option>
            <option value="Michael">Michael</option>
            <option value="Sophie">Sophie</option>
            <option value="Mohamud">Mohamud</option>
            <option value="Irene">Irene</option>
            <option value="Guido">Guido</option>
          </select>
        </label>
        <label>
          Duration
          <select
            id="duration"
            name="duration"
            onChange={handleChange}
            required
          >
            <option value="">-- Pick one --</option>
            <option value={45}>45 min</option>
            <option value={60}>60 min</option>
          </select>
        </label>

        <button>Add Class</button>
      </Fieldset>
    </form>
  )
}

const Fieldset = styled.fieldset`
  width: 100%;
  margin: 0 auto;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
