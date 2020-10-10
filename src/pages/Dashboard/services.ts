import axiosInstance from 'services/axiosInstance'
import { Car } from './types'

export async function getCars() {
  const response = await axiosInstance.get<Car[]>('/cars')

  return response.data
}
