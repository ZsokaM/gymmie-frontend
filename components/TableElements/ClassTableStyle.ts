import styled from 'styled-components'

export const TableContainer = styled.table`
  margin: 0 auto;
  min-height: 100%;
  width: 95%;
`

export const TableHeader = styled.thead`
  height: 40px;
  background-color: ${({ theme }) => theme.bg.secondary};
  color: ${({ theme }) => theme.text.primary};
  text-transform: capitalize;
`
export const TableRow = styled.tr`
  height: 80%;
  text-align: center;
`
export const TableField = styled.td`
  height: 50px;
  width: 200px;
  background-color: ${({ theme }) => theme.bg.quarternary};
  vertical-align: center;
`

export const SmallButton = styled.button`
  border-radius: 5px;
  background: ${({ theme }) => theme.bg.secondary};
  padding: 1rem;
  color: ${({ theme }) => theme.text.primary};
  width: 70px;
  font-size: 1.25rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.2s ease-in-out;
  box-shadow: 3px 3px 2px 1px rgba(0, 0, 255, .2);

  &:disabled{
    background: grey;
    color: darkgray
  }

  &:hover {
    background: ${({ theme }) => theme.bg.tertiary}
`
