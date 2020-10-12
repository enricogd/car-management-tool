import cogoDefaultOptions from './toaster'
import cogoToast from 'cogo-toast'

interface IError {
  code: number
  message: string
}

function handleError(error: IError): void {
  if (!error?.message) {
    cogoToast.error('Servidor indisponível...', cogoDefaultOptions)
    return
  }

  cogoToast.error(error.message, cogoDefaultOptions)
}

export default handleError
