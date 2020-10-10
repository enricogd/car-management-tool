import { Car } from 'interfaces/Car'

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
