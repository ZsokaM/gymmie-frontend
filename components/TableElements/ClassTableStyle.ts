import styled, { css } from 'styled-components'
import { borderRadius, centeredItems } from '../styles/HelperStyles'

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

  ${({ theme }) => theme.mediaQueries.medium} {
    display: block;
    overflow-x: auto;
  }
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
  border-bottom: 1px solid ${({ theme }) => theme.bg.quarternary};
  vertical-align: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.text.secondary};

  &:last-of-type {
    display: flex;
    justify-content: center;
  }
`

export const ButtonWrapper = styled.section`
  display: flex;
  justify-content: space-around;
`
