import { useState } from 'react'
import useForm from '../FormElements/useForm'
import getWeek from '../../lib/getWeek'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import { ALL_CLASSES_QUERY } from '../Schedule/Schedule'

const CREATE_SPORTCLASS_MUTATION = gql`
  mutation CREATE_SPORTCLASS_MUTATION(
    $name: String!
    $freeSpots: Int!
    $status: String!
    $week: Int!
    $day: String!
    $startTime: String!
    $teacher: String!
    $duration: String!
  ) {
    createSportClass(
      data: {
        name: $name
        freeSpots: $freeSpots
        status: $status
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
  const { inputs, handleChange, clearForm } = useForm({
    name: '',
    freeSpots: 10,
    status: 'AVAILABLE',
    week: getWeek(),
    day: '',
    startTime: '08:00',
    teacher: '',
    duration: '60 min',
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
        <label htmlFor="status">
          Status
          <select id="status" name="status" onChange={handleChange} required>
            <option value="">-- Pick one --</option>
            <option value="AVAILABLE">Available</option>
            <option value="NOT AVAILABLE">Not available</option>
          </select>
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
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
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
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
          </select>
        </label>
        {/* todo if there's time: add teacher schema and use map for options, add CRUD */}
        <label htmlFor="teacher">
          Teacher
          <select id="teacher" name="teacher" onChange={handleChange} required>
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
            <option value="45 min">45 min</option>
            <option value="60 min">60 min</option>
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
