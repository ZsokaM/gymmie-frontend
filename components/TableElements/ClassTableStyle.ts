import styled, { css } from 'styled-components'
import { centeredItems, borderRadius } from '../styles/HelperStyles'

export const FlexTable = css`
  display: flex;
  flex-direction: column;
`

export const FlexHead = css`
  ${({ theme }) => theme.mediaQueries.small} {
    display: none;
  }
`

export const FlexTh = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const FlexTr = css`
  ${({ theme }) => theme.mediaQueries.small} {
    flex-direction: column;
  }
`

export const Flextd = css`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.small} {
    align-items: center;

    &:before {
      ${centeredItems}
      flex-direction: column;
      text-transform: capitalize;
      width: 100%;
      border-bottom: 1px solid ${({ theme }) => theme.bg.secondary};
      padding: 1rem;
      content: attr(data-label);
    }
  }
`
export const TableTitle = styled.h2`
  text-align: center;
`

export const TableContainer = styled.table`
  margin: 0 auto;
  height: 100%;
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
  text-transform: capitalize;
`

export const SmallButton = styled.button`
  ${borderRadius};
  background-color: ${({ theme }) => theme.bg.secondary};
  padding: 1rem;
  color: ${({ theme }) => theme.text.primary};
  width: 30%;
  font-size: 1.25rem;
  border: none;
  cursor: pointer;
  ${centeredItems};
  justify-content: center;
  transition: background-color 0.2s ease-in-out;
  box-shadow: 3px 3px 2px 1px rgba(0, 0, 255, 0.2);

  &:disabled {
    background-color: grey;
    color: darkgray;
  }

  &:hover {
    background-color: ${({ theme }) => theme.bg.tertiary};
  }
`

export const ButtonWrapper = styled.section`
  display: flex;
  justify-content: space-around;
`
