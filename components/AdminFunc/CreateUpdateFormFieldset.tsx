import {
  InputStyle,
  LabelStyle,
  FormSelect,
} from '../FormElements/formElementsStyle'
import { weekDayNames, classHours } from '../../lib/dateHelpers'

export default function CreateUpdateFormFieldset({ inputs, handleChange }) {
  return (
    <>
      <LabelStyle htmlFor="name">
        <span>Class type</span>
        <InputStyle
          type="text"
          id="name"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          required
        />
      </LabelStyle>

      <LabelStyle htmlFor="freeSpots">
        <span>Number of spots</span>
        <InputStyle
          type="number"
          id="freeSpots"
          name="freeSpots"
          value={inputs.freeSpots}
          onChange={handleChange}
          required
        />
      </LabelStyle>

      <LabelStyle>
        <span>Status</span>
        <FormSelect
          id="available"
          name="available"
          onChange={handleChange}
          required
        >
          <option value="">-- Pick one --</option>
          <option value="1">Available</option>
          <option value="0">Not available</option>
        </FormSelect>
      </LabelStyle>

      <LabelStyle htmlFor="year">
        <span>Year</span>
        <InputStyle
          type="number"
          id="year"
          name="year"
          value={inputs.year}
          onChange={handleChange}
          required
        />
      </LabelStyle>
      <LabelStyle htmlFor="week">
        <span>Week of the Year</span>
        <InputStyle
          type="number"
          id="week"
          name="week"
          //the onchange works but display wrong
          value={inputs.week}
          onChange={handleChange}
        />
      </LabelStyle>
      <LabelStyle htmlFor="day">
        <span>Day</span>
        <FormSelect id="day" name="day" onChange={handleChange} required>
          <option value="">-- Pick one --</option>
          {weekDayNames.map((weekday, idx) => (
            <option key={weekday} value={idx}>
              {weekday}
            </option>
          ))}
        </FormSelect>
      </LabelStyle>
      <LabelStyle htmlFor="startTime">
        <span>Starts at</span>
        <FormSelect
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
        </FormSelect>
      </LabelStyle>
      {/* todo if there's time: add teacher schema and use map for options, add CRUD */}
      <LabelStyle htmlFor="teacher">
        <span>Teacher</span>
        <FormSelect
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
        </FormSelect>
      </LabelStyle>
      <LabelStyle>
        <span>Duration</span>
        <FormSelect
          id="duration"
          name="duration"
          onChange={handleChange}
          required
        >
          <option value="">-- Pick one --</option>
          <option value={45}>45 min</option>
          <option value={60}>60 min</option>
        </FormSelect>
      </LabelStyle>
    </>
  )
}
