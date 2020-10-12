import theme from 'styles/theme'

export interface IModalPrimaryProps extends IModalPrimaryStyledProps {
  children?: JSX.Element
  isActive: boolean
  onClose: () => void
  title: string
}

export interface IModalPrimaryStyledProps {
  size?: keyof typeof theme.modal.sizes
}
