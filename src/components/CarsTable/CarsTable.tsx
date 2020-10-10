import { Car } from 'interfaces/Car'
import React, { useEffect, useMemo, useState } from 'react'
import { SortBy } from './types'

export default function Carstable({ cars }: { cars: Car[] }) {
  const [sortBy, setSortBy] = useState<SortBy>({
    header: 'default',
    order: 'asc',
  })
  const [tableData, setTableData] = useState<Car[]>(cars)

  const sortRowsBy = (col: SortBy['header']) => () => {
    const { header, order } = sortBy

    const shouldChangeOrder = header === col

    if (shouldChangeOrder) {
      const newOrder = order === 'asc' ? 'desc' : 'asc'

      setSortBy((x) => ({ ...x, order: newOrder }))

      return
    }

    setSortBy({ header: col, order: 'asc' })
  }

  useMemo(() => {
    const { header, order } = sortBy
    if (header === 'default') return

    let sortedList = [...tableData].sort((a, b) => {
      let compareResult = String(a[header]).localeCompare(String(b[header]))

      // Different sort methods needed for diferent keys.
      if (header === 'price') {
        compareResult = Number(a[header]) - Number(b[header])
      } else {
        compareResult = String(a[header]).localeCompare(String(b[header]))
      }

      const result = order === 'asc' ? compareResult : -compareResult

      return result
    })

    setTableData(sortedList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy])

  useEffect(() => {
    setTableData(cars)
  }, [cars])

  return (
    <table>
      <thead>
        <tr>
          <th onClick={sortRowsBy('brand')}>
            <div>
              <p>Marca</p>
            </div>
          </th>
          <th onClick={sortRowsBy('title')}>
            <div>
              <p>Modelo</p>
            </div>
          </th>
          <th onClick={sortRowsBy('age')}>
            <div>
              <p>Ano</p>
            </div>
          </th>
          <th onClick={sortRowsBy('price')}>
            <div>
              <p>Preço</p>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {tableData &&
          tableData.map((car) => (
            <tr key={car._id}>
              <td>{car.brand}</td>
              <td>
                <p>{car.title}</p>
              </td>
              <td>
                <p>{car.age}</p>
              </td>
              <td>
                <p>{car.price}</p>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
