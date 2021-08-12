import { useMutation } from '@apollo/client'
import styled from 'styled-components'
import gql from 'graphql-tag'
import useForm from '../FormElements/useForm'
import {
  getWeek,
  weekDayNames,
  classHours,
  currentYear,
} from '../../lib/dateHelpers'
import { ALL_CLASSES_QUERY } from '../Schedule/Schedule'

const CREATE_SPORTCLASS_MUTATION = gql`
  mutation CREATE_SPORTCLASS_MUTATION(
    $name: String!
    $freeSpots: Int!
    $available: Boolean
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
    available: true,
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
              <option value={true}>Available</option>
              <option value={false}>Not available</option>
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
