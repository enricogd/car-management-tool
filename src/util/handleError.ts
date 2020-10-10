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

  // Handle Error Diferently because need to redirect
  if (error.code === 418) {
    throw error
  }

  cogoToast.error(error.message, cogoDefaultOptions)

  if (error.code === 421) {
    throw error
  }
}

export default handleError
