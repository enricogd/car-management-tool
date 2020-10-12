import { Car } from 'interfaces/Car'

export type SortBy = {
  header: keyof Pick<Car, 'brand' | 'age' | 'price' | 'title'> | 'default'
  order: 'asc' | 'desc'
}

export interface CartTableProps {
  cars: Car[]
  handleEdit: (car?: Car | undefined) => void
}
