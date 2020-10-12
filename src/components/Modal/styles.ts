import styled, { css } from 'styled-components/macro'
import { fontType, transition } from 'styles/helpers'

import { IModalPrimaryStyledProps } from './types'

export const ModalOverlay = styled.div<IModalPrimaryStyledProps>`
  ${({ theme, size = 'md' }) => css`
    background: ${theme.colors.modalOverlay};
    position: fixed;
    top: -200px;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px ${theme.modal.sizes[size]};

    ${transition()}

    &.active {
      opacity: 1;
      top: 0;
      z-index: 999;
      pointer-events: unset;
      visibility: visible;
    }
  `}
`

export const Modal = styled.div`
  ${({ theme }) => css`
    padding: 32px;
    max-height: 100%;
    overflow-y: auto;
    background: ${theme.colors.secondary};
    width: 100%;
    border-radius: 4px;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
      flex-flow: row nowrap;
    }
    .title {
      font-size: ${theme.font.sizes.xlarge};
    }
    color: white;
    ${fontType('b')};

    .close-button {
      color: white;
      font-size: ${theme.font.sizes.xlarge};
      border-radius: 50%;
      cursor: pointer;

      &:hover {
        background-color: white;
        color: ${theme.colors.secondary};
      }
    }
  `}
`
