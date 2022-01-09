import styled from 'styled-components'
import CheckBoxTemp from './Template/CheckBoxTemp'
import manual from '../assets/images/sliderManual.png'

const Container = styled.div``
const Figure = styled.figure`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin: 0 0 2rem 0;
  }
  @media screen and (min-width: 1024px) {
  }
`
const Image = styled.img``
const Title = styled.h1`
  text-align: center;
`
const P = styled.p`
  text-align: center;
`

const App = () => {
  return (
    <Container>
      <Title>Bienvenid@</Title>
      <Figure>
        <Image src={manual} alt="" />
      </Figure>
      <CheckBoxTemp />
      <P>Made by Nayruth Calla @ 2021</P>
    </Container>
  )
}

export default App
