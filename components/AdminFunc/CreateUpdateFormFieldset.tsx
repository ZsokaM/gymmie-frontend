import {
  InputStyle,
  LabelStyle,
  FormSelect,
} from '../FormElements/formElementsStyle'
import { weekDayNames, classHours } from '../../lib/dateHelpers'
import { teachersArray } from '../../lib/generalHelpers'
import { FormProps } from '../FormElements/useForm'

interface CreateUpdateProps {
  inputs: FormProps
  handleChange: React.FormEventHandler<HTMLInputElement | HTMLSelectElement>
}
export default function CreateUpdateFormFieldset({
  inputs,
  handleChange,
}: CreateUpdateProps) {
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
          value={inputs.week}
          onChange={handleChange}
        />
      </LabelStyle>
      <LabelStyle htmlFor="day">
        <span>Day</span>
        <FormSelect id="day" name="day" onChange={handleChange} required>
          <option value="">-- Pick one --</option>
          {weekDayNames.length &&
            weekDayNames.map((weekday, idx) => (
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
          {classHours().length &&
            classHours().map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
        </FormSelect>
      </LabelStyle>

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
          {teachersArray.length &&
            teachersArray.map((teacher, idx) => (
              <option key={idx} value={teacher}>
                {teacher}
              </option>
            ))}
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
