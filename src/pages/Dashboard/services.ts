import { Car } from 'interfaces/Car'
import axiosInstance from 'services/axiosInstance'

export async function getCars() {
  const response = await axiosInstance.get<Car[]>('/cars')

  return response.data
}

export async function postCar(car: Car) {
  try {
    const payload = { ...car }

    const response = await axiosInstance.post('/cars', payload)

    return response.data
  } catch (error) {
    throw error
  }
}
