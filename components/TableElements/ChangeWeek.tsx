import styled from 'styled-components'
import React from 'react'
import { centeredItems } from '../styles/HelperStyles'
import { FormButton } from '../styles/ButtonStyle'

interface ChangeWeekProps {
  handleClickPrev: React.MouseEventHandler<HTMLButtonElement>
  handleClickNext: React.MouseEventHandler<HTMLButtonElement>
  disabledConditionPrev?: boolean
  disabledConditionNext?: boolean
  text?: any
}

export default function ChangeWeek({
  handleClickPrev,
  handleClickNext,
  disabledConditionPrev,
  disabledConditionNext,
  text,
}: ChangeWeekProps) {
  return (
    <Header>
      <FormButton
        type="button"
        onClick={handleClickPrev}
        disabled={disabledConditionPrev}
      >
        Previous Week
      </FormButton>
      <h2>{text}</h2>
      <FormButton
        type="button"
        onClick={handleClickNext}
        disabled={disabledConditionNext}
      >
        Next Week
      </FormButton>
    </Header>
  )
}

const Header = styled.section`
  margin: 1.5rem;
  ${centeredItems};
  justify-content: space-evenly;

  h2 {
    color: ${({ theme }) => theme.text.primary};
  }
`
