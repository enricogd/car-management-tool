import { Car } from 'pages/Dashboard/types'

export const cleaner = (cars: Car[]) =>
  cars.filter(
    (car) =>
      !(
        car.brand === 'brand' ||
        car.brand === 'Marca' ||
        car.brand === 'Teste' ||
        car.brand === 'N/A'
      )
  )
