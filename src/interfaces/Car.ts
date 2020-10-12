interface ICar {
  _id?: string
  brand: string
  title: string
  age: number
  price: string
}

export class Car implements ICar {
  _id?: string
  brand: string
  title: string
  age: number
  price: string
  constructor(brand = '', title = '', age = 2020, price = '') {
    this.brand = brand
    this.title = title
    this.age = age
    this.price = price
  }
}
