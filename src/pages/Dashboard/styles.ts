import styled, { css } from 'styled-components'
import { transition } from 'styles/helpers'

export const Section = styled.section`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.secondary};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    justify-content: flex-start;
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    align-items: center;
    border-bottom: 1px solid ${theme.colors.secondary};
    color: ${theme.colors.quinary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem;
    width: 100%;
    line-height: 2.5rem;
  `}
`

export const Main = styled.div`
  /* padding: 1.5rem; */
  width: 100%;
`

export const Button = styled.button`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.quinary};
    border-radius: 5px;
    border: none;
    box-shadow: 0px 3px 6px ${theme.colors.tertiary};
    color: white;
    font-size: 2rem;
    height: 2.5rem;
    width: 2.5rem;
    cursor: pointer;

    ${transition(0.1)}

    &:active {
      position: relative;
      top: 0.5px;
      box-shadow: none;
    }
  `}
`
