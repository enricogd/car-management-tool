import styled, { css } from 'styled-components/macro'
import { transition } from 'styles/helpers'

export const Main = styled.main`
  display: flex;
  height: 100%;
  max-width: 1200px;
  padding: 16px 0;
  width: 100%;
`

export const Section = styled.section`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.sectionBg};
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
    border-bottom: 1px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
    width: 100%;
    line-height: 2.5rem;
  `}
`

export const Content = styled.div`
  width: 100%;
  padding: 16px;
`

export const Button = styled.button`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.primary};
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