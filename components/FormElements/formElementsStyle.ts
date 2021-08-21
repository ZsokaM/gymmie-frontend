import styled from 'styled-components'
import { centeredItems, borderRadius } from '../styles/HelperStyles'

export const FormStyle = styled.form`
  ${centeredItems};
  flex-direction: column;
  width: 100%;
`
export const FormHeader = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.text.primary};
`

export const FieldSetStyle = styled.fieldset`
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  box-shadow: 6px 6px 1px 1px ${({ theme }) => theme.bg.tertiary};
  border: none;
  ${borderRadius};
  ${centeredItems};
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg.quarternary};
`
export const LabelStyle = styled.label`
  margin-bottom: 0.5rem;
  text-align: right;
  width: 100%;
  color: ${({ theme }) => theme.text.primary};
  font-size: 1.5rem;
  ${centeredItems};
  justify-content: flex-end;

  span {
    margin-right: 2rem;
    flex: 1;
    &:after {
      content: ':';
      margin-left: 2px;
    }
  }
`
export const InputStyle = styled.input`
  border: none;
  background-color: ${({ theme }) => theme.bg.quarternary};
  border-bottom: 1px solid var(--mediumGrey);
  color: ${({ theme }) => theme.text.primary};
  padding: 1rem;
  width: 70%;
  height: 50px;
  font-size: 1.5rem;
`

export const FormSelect = styled.select`
  background-color: transparent;
  width: 70%;
  padding: 1rem;
  font-size: 1.5rem;
  border: none;
  box-shadow: 1px 1px 1px 1px var(--mediumGrey);
  ${borderRadius};
  color: ${({ theme }) => theme.text.primary};
`
