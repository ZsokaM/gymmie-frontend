import styled from 'styled-components'
import { centeredItems, borderRadius } from './HelperStyles'

export const Button = styled.button`
  ${borderRadius};
  background-color: ${({ theme }) => theme.bg.tertiary};
  white-space: nowrap;
  padding: 14px 48px;
  color: ${({ theme }) => theme.text.tertiary};
  border: none;
  cursor: pointer;
  ${centeredItems};
  justify-content: center;
  transition: background-color 0.2s ease-in-out;
  box-shadow: 3px 3px 2px 1px rgba(0, 0, 255, 0.2);

  &:hover {
    background-color: ${({ theme }) => theme.bg.quarternary};
  }
`

export const FormButton = styled(Button)`
  background-color: ${({ theme }) => theme.bg.secondary};
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.text.primary};
  width: 150px;
  font-size: 1.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.bg.tertiary};
  }
`

export const SmallFormButton = styled(FormButton)`
  padding: 1rem;
  width: 70px;
  font-size: 1.25rem;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:disabled {
    background-color: grey;
    color: darkgray;
  }
`
