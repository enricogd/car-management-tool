import { CTOptions } from 'cogo-toast'

type ValidCogoPositions =
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

interface CogoPosition {
  position: ValidCogoPositions
}

const cogoPos = (x: ValidCogoPositions): CogoPosition => ({ position: x })

export const CogoPositions = {
  'top-center': cogoPos('top-center'),
  'top-right': cogoPos('top-right'),
  'bottom-left': cogoPos('bottom-left'),
  'bottom-center': cogoPos('bottom-center'),
  'bottom-right': cogoPos('bottom-right'),
}

const cogoDefaultOptions: CTOptions = {
  position: 'top-right',
  hideAfter: 10,
}

export default cogoDefaultOptions
