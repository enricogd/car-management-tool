export const brlFormat = (value: number | string) => {
  return Number(value).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })
}
