import { Car } from 'interfaces/Car'
import axiosInstance from 'services/axiosInstance'

export async function getCars() {
  const response = await axiosInstance.get<Car[]>('/cars')

  return response.data
}
