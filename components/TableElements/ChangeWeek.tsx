import styled from 'styled-components'
import React from 'react'
import { centeredItems } from '../styles/HelperStyles'
import { FormButton } from '../styles/ButtonStyle'

interface ChangeWeekProps {
  handleClickPrev: React.MouseEventHandler<HTMLButtonElement>
  handleClickNext: React.MouseEventHandler<HTMLButtonElement>
  disabledConditionPrev?: boolean
  disabledConditionNext?: boolean
  children?: React.ReactNode
}

export default function ChangeWeek({
  handleClickPrev,
  handleClickNext,
  disabledConditionPrev,
  disabledConditionNext,
  children,
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
      {children}
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
