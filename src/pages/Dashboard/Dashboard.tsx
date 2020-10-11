import React, { useEffect, useState } from 'react'
import { getCars } from './services'
import { CarsTable } from 'components/CarsTable'
import { Car } from 'interfaces/Car'
import * as S from './styles'
import { Col, Container, Grid, Row } from 'styles/grid'
import { cleaner } from 'util/cars'

export default function Dashboard() {
  const [carsList, setCarsList] = useState<Car[]>([])

  const fetchCars = async () => {
    const res = await getCars()
    setCarsList(cleaner(res))
  }

  useEffect(() => {
    fetchCars()
  }, [])

  return (
    <Container>
      <S.Main>
        <Grid>
          <Row>
            <Col size={1}>
              <S.Section>
                <S.Header>
                  <h2>Carros</h2>
                  <S.Button onClick={() => {}}>+</S.Button>
                </S.Header>
                <S.Content>
                  <CarsTable cars={carsList} />
                </S.Content>
              </S.Section>
            </Col>
          </Row>
        </Grid>
      </S.Main>
    </Container>
  )
}
