import styled, { css } from 'styled-components'
import { fontType, transition } from 'styles/helpers'

export const Input = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;

    label {
      position: absolute;
      top: 22px;
      left: 16px;
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.small};

      cursor: text;

      ${fontType('b')};
      ${transition()}
    }

    input {
      padding: 26px 16px 10px 16px;
      border: solid 1px ${theme.colors.secondary};
      border-radius: 30px;
      color: ${theme.colors.darkGrey};
      background: ${theme.colors.sectionBg};
      /* background: transparent; */

      width: 100%;
      font-size: ${theme.font.sizes.large};
      ${fontType('r')};
      ${transition()}

      &:focus,
		  &:valid {
        border: solid 1px ${theme.colors.primary};

        + label {
          ${fontType('b')};
          top: 10px;
          left: 16px;
          font-size: ${theme.font.sizes.medium};

          color: ${({ theme }) => theme.colors.primary};
        }
      }

      &[disabled] {
        border: dashed 1px ${theme.colors.quaternary};

        + label {
          ${fontType('b')};
          top: 12px;
          left: 16px;
          font-size: ${theme.font.sizes.medium};
          color: ${theme.colors.quaternary};
        }
      }
    }
  `}
`
