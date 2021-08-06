import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 50px;
  background: ${({ theme }) => theme.bg.tertiary};
  white-space: nowrap;
  padding: 14px 48px;
  color: ${({ theme }) => theme.text.tertiary};
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
    background: ${({ theme }) => theme.bg.quarternary}
`
