import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import * as S from './styles'
import { IModalPrimaryProps } from './types'

export default function Modal({
  isActive,
  onClose,
  title,
  children,
  size = 'md',
}: IModalPrimaryProps) {
  return (
    <S.ModalOverlay size={size} className={`${isActive ? 'active' : ''}`}>
      <S.Modal>
        <div className="header">
          <h2 className="title">{title}</h2>
          <AiOutlineCloseCircle className="close-button" onClick={onClose} />
        </div>
        <div className="content">{children}</div>
      </S.Modal>
    </S.ModalOverlay>
  )
}
