import styled from 'styled-components'
import Link from 'next/link'

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg.quarternary};
  align-items: center;
`
export const LabelStyle = styled.label`
  margin-bottom: 0.5rem;
  text-align: right;
  width: 100%;
  color: ${({ theme }) => theme.text.primary};
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

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
  border-radius: 3px;
  color: ${({ theme }) => theme.text.primary};
`

export const FormButton = styled.button`
border-radius: 5px;
  background: ${({ theme }) => theme.bg.secondary};
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.text.primary};
  width: 150px;
  font-size: 1.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  box-shadow: 3px 3px 2px 1px rgba(0, 0, 255, .2);

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.bg.tertiary}
`
