import React, { ChangeEvent, useEffect, useState } from 'react'
import { getCars, postCar } from './services'
import { CarsTable } from 'components/CarsTable'
import { Car } from 'interfaces/Car'
import * as S from './styles'
import { Col, Container, Grid, Row } from 'styles/grid'
import { cleaner } from 'util/cars'
import { Modal } from 'components/Modal'

export default function Dashboard() {
  const [carsList, setCarsList] = useState<Car[]>([])
  const [targetCar, setTargetCar] = useState<Car>(new Car())
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fetchCars = async () => {
    const res = await getCars()
    setCarsList(cleaner(res))
  }

  const modalHandler = (car?: Car) => {
    setTargetCar(car || new Car())
    setIsModalOpen(true)
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target

    setTargetCar({ ...targetCar, [id]: value })
  }

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (targetCar._id) {
      const idx = carsList.findIndex((car) => car._id === targetCar._id)
      const copy = [...carsList]
      copy[idx] = targetCar

      setCarsList(copy)
    } else {
      setCarsList([...carsList, targetCar])
      await postCar(targetCar)
    }
    setIsModalOpen(false)
  }

  useEffect(() => {
    fetchCars()
  }, [])

  const tableProps = {
    cars: carsList,
    handleEdit: modalHandler,
  }

  const modalTitle = targetCar._id
    ? 'Editar dados do carro'
    : 'Cadastrar um novo carro'

  const modalButton = targetCar._id ? 'EDITAR' : 'CADASTRAR'

  return (
    <Container>
      <Modal
        size="md"
        title={modalTitle}
        onClose={() => {
          setIsModalOpen(false)
        }}
        isActive={isModalOpen}>
        <Grid>
          <form onSubmit={submitHandler}>
            <Row>
              <Col size={1}>
                <S.ModalInput
                  type="text"
                  value={targetCar.brand}
                  id={'brand'}
                  onChange={changeHandler}
                  label="Marca"
                  maxLength={20}
                />
                <S.ModalInput
                  type="text"
                  id={'title'}
                  value={targetCar.title}
                  onChange={changeHandler}
                  label="Modelo"
                  maxLength={20}
                />
              </Col>
              <Col size={1}>
                <S.ModalInput
                  type="number"
                  id={'age'}
                  value={targetCar.age}
                  onChange={changeHandler}
                  label="Ano"
                />
                <S.ModalInput
                  type="number"
                  id={'price'}
                  value={targetCar.price}
                  onChange={changeHandler}
                  label="Preço"
                />
              </Col>
            </Row>
            <S.SubmitButtonWrapper>
              <button type="submit">{modalButton}</button>
            </S.SubmitButtonWrapper>
          </form>
        </Grid>
      </Modal>
      <S.Main>
        <Grid>
          <Row>
            <Col size={1}>
              <S.Section>
                <S.Header>
                  <h2>Carros</h2>
                  <S.Button
                    onClick={() => {
                      modalHandler()
                    }}>
                    +
                  </S.Button>
                </S.Header>
                <S.Content>
                  <CarsTable {...tableProps} />
                </S.Content>
              </S.Section>
            </Col>
          </Row>
        </Grid>
      </S.Main>
    </Container>
  )
}
