import { Car } from 'interfaces/Car'
import React, { useEffect, useMemo, useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiArrowUnsorted,
} from 'react-icons/ti'
import ReactTooltip from 'react-tooltip'
import { brlFormat } from 'util/money'

import * as S from './styles'
import { CartTableProps, SortBy } from './types'

export default function Carstable({
  cars,
  editHandler,
  deleteHandler,
}: CartTableProps) {
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

  const handleSortIcon = (col: SortBy['header']) => {
    const { header, order } = sortBy
    if (col === 'default') return
    if (header === col) {
      // TODO: check if sorted down is asc or desc in other websites
      return order === 'asc' ? <TiArrowSortedDown /> : <TiArrowSortedUp />
    }
    return <TiArrowUnsorted />
  }

  useEffect(() => {
    setTableData(cars)
  }, [cars])

  return (
    <S.Table>
      <thead>
        <tr>
          <th onClick={sortRowsBy('brand')}>
            <div>
              <p>Marca</p>
              {handleSortIcon('brand')}
            </div>
          </th>
          <th onClick={sortRowsBy('title')}>
            <div>
              <p>Modelo</p>
              {handleSortIcon('title')}
            </div>
          </th>
          <th onClick={sortRowsBy('age')}>
            <div>
              <p>Ano</p>
              {handleSortIcon('age')}
            </div>
          </th>
          <th onClick={sortRowsBy('price')}>
            <div>
              <p>Preço</p>
              {handleSortIcon('price')}
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {tableData &&
          tableData.map((car, idx) => (
            <tr key={idx}>
              <td>{car.brand}</td>
              <td>
                <p>{car.title}</p>
              </td>
              <td>
                <p>{car.age}</p>
              </td>
              <td>
                <p>{brlFormat(car.price)}</p>
              </td>
              <td>
                <S.ButtonsWrapper>
                  <MdDelete
                    data-tip
                    data-for="delete"
                    onClick={() => {
                      deleteHandler(car._id)
                    }}
                  />
                  <ReactTooltip effect="solid" id="delete">
                    Remover
                  </ReactTooltip>
                  <MdEdit
                    data-tip
                    data-for="edit"
                    onClick={(x) => {
                      editHandler(car)
                    }}
                  />
                  <ReactTooltip effect="solid" id="edit">
                    Editar
                  </ReactTooltip>
                </S.ButtonsWrapper>
              </td>
            </tr>
          ))}
      </tbody>
    </S.Table>
  )
}
