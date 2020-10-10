import React, { useEffect, useState } from 'react'
import { getCars } from './services'
import { cleaner } from 'util/cars'
import { CarsTable } from 'components/CarsTable'
import { Car } from 'interfaces/Car'

export default function Dashboard() {
  const [carsList, setCarsList] = useState<Car[]>([])
  console.log({ carsList })

  const fetchCars = async () => {
    const res = await getCars()
    setCarsList(res)
  }

  useEffect(() => {
    fetchCars()
  }, [])

  return (
    <div>
      <CarsTable cars={carsList} />
    </div>
  )
}
