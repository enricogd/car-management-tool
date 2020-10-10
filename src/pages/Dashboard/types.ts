export interface Car {
  _id: string
  brand: string
  title: string
  age: number
  price: string
}

export type SortBy = {
  header: keyof Pick<Car, 'brand' | 'age' | 'price' | 'title'> | 'default'
  order: 'asc' | 'desc'
}
