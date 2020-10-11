import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  height: 100%;
  place-content: center;
  place-items: center;
  width: 100%;
  max-width: 100vw;
`

export const Grid = styled.div`
  width: 100%;
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

export const Col = styled.div`
  flex: ${(props: { size: number }) => props.size};
  flex-flow: column wrap;
  margin: 8px;
  min-width: fit-content;
`
