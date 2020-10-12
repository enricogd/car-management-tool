import { Car } from 'interfaces/Car'
import axiosInstance from 'services/axiosInstance'

/**
 * Sends a POST request to create a new Car
 * @param car The car to create
 */
export async function postCar(car: Car) {
  try {
    const payload = { ...car }

    const response = await axiosInstance.post<Car>('/cars', payload)

    return response.data
  } catch (error) {
    throw error
  }
}

/**
 * Sends a GET request to get the collection of cars
 */
export async function getCars() {
  const response = await axiosInstance.get<Car[]>('/cars')

  return response.data
}

/**
 * Sends a PUT request to update the car of which it's Id is being sent as an argument
 * @param carId The ID of the car to be updated
 */
export async function putCar(car: Car) {
  const { title, brand, price, age, _id } = car
  const payload: Car = {
    title,
    brand,
    price,
    age,
  }
  try {
    const response = await axiosInstance.put<Car>(`/cars/${_id}`, payload)

    return response.data
  } catch (error) {
    throw error
  }
}

/**
 * Sends a DELETE request to delete the car of which it's Id is being sent as an argument
 * @param carId Id of the car to be deleted
 */
export async function deleteCar(carId: Car['_id']) {
  try {
    const response = await axiosInstance.delete<Car>(`/cars/${carId}`)

    return response.data
  } catch (error) {
    throw error
  }
}
