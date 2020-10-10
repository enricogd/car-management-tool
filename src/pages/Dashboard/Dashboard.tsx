import React, { useEffect, useState } from 'react'
import { getCars } from './services'
import { CarsTable } from 'components/CarsTable'
import { Car } from 'interfaces/Car'
import * as S from './styles'
import { Col, Grid, Row } from 'styles/grid'

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
      <Grid>
        <Row>
          <Col size={1}>
            <S.Section>
              <S.Header>
                <h2>Carros</h2>
                <S.Button onClick={() => {}}>+</S.Button>
              </S.Header>
              <S.Main>
                <CarsTable cars={carsList} />
              </S.Main>
            </S.Section>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}
