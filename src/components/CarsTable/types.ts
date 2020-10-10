import { Car } from 'interfaces/Car'

export type SortBy = {
  header: keyof Pick<Car, 'brand' | 'age' | 'price' | 'title'> | 'default'
  order: 'asc' | 'desc'
}
