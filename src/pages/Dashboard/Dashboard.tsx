import React, { ChangeEvent, useEffect, useState } from 'react'
import { deleteCar, getCars, postCar, putCar } from './services'
import { CarsTable } from 'components/CarsTable'
import { Car } from 'interfaces/Car'
import * as S from './styles'
import { Col, Container, Grid, Row } from 'styles/grid'
import { Modal } from 'components/Modal'
import cogoToast from 'cogo-toast'
import cogoDefaultOptions from 'util/toaster'

export default function Dashboard() {
  const [carsList, setCarsList] = useState<Car[]>([])
  const [targetCar, setTargetCar] = useState<Car>(new Car())
  const [isModalOpen, setIsModalOpen] = useState(false)
  console.log({ targetCar })

  const fetchCars = async () => {
    const res = await getCars()
    setCarsList(res)
  }

  const modalHandler = (car?: Car) => {
    setTargetCar(car || new Car())
    setIsModalOpen(true)
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target

    setTargetCar({ ...targetCar, [id]: value })
  }

  const deleteCarHandler = async (carId: Car['_id']) => {
    await deleteCar(carId)
    cogoToast.success('Carro removido com sucesso!', cogoDefaultOptions)
    fetchCars()
  }

  const submitCarHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!carValidate()) return

    // If is in edit mode
    if (targetCar._id) {
      if (carsList.find((car) => car === targetCar)) {
        cogoToast.info('Nenhuma alteração foi feita', cogoDefaultOptions)
      } else {
        await putCar(targetCar)
        cogoToast.success('Carro editado com sucesso!', cogoDefaultOptions)
      }

      // If not, is in create mode
    } else {
      setCarsList([...carsList, targetCar])
      await postCar(targetCar)
      cogoToast.success('Carro cadastrado com sucesso!', cogoDefaultOptions)
    }

    fetchCars()
    setIsModalOpen(false)
  }

  const carValidate = () => {
    const isAgeValid = targetCar.age > 1900 && targetCar.age < 2020
    !isAgeValid && cogoToast.error('Ano do carro inválido', cogoDefaultOptions)

    const isBrandValid = targetCar.brand.search(/\d/) === -1
    !isBrandValid &&
      cogoToast.error('Nome da marca inválido', cogoDefaultOptions)

    const isPriceValid = Number(targetCar.price) >= 0
    !isPriceValid && cogoToast.error('Preço inválido', cogoDefaultOptions)

    const isTitleValid = targetCar.title.search(/\d/) === -1
    !isTitleValid && cogoToast.error('Modelo inválido', cogoDefaultOptions)

    const isCarValid =
      isAgeValid && isBrandValid && isPriceValid && isTitleValid

    return isCarValid
  }

  useEffect(() => {
    fetchCars()
  }, [])

  const tableProps = {
    cars: carsList,
    editHandler: modalHandler,
    deleteHandler: deleteCarHandler,
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
          <form onSubmit={submitCarHandler}>
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
                <S.ModalCurrencyInput
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
