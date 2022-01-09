import { useState } from 'react'
import styled from 'styled-components'
import Swal from 'sweetalert2'
import podcast from '../../assets/images/podcast-cover.png'
import CheckBox from './CheckBox'

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex: 1;
`
const Figure = styled.figure`
  display: none;
  @media screen and (min-width: 768px) {
    filter: drop-shadow(0px 4px 24px #453f3f);
    width: 37%;
  }
  @media screen and (min-width: 1024px) {
  }
`
const Image = styled.img`
  width: 100%;
`
const UlCont = styled.div`
  max-width: 52%;
  padding: 2rem;
  background: white;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
  padding: 60px 80px;
  height: 300px;
  overflow-y: scroll;
`
const Title = styled.h1`
  font-weight: bold;
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #a7a7a7;
  margin: 0 0 40px 0;
  padding: 0;
`
const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`
const Button = styled.button`
  background: #8c59ff;
  border: none;
  border-radius: 24px;
  text-transform: uppercase;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: bold;
  padding: 8px 25px;
  color: white;
  line-height: 1;
  letter-spacing: 2px;
  cursor: pointer;
  &:hover {
    background: #543599;
  }
`
const data = [
  {
    forCheck: 'episode1',
    text: '1 || Trailer',
  },
  {
    forCheck: 'episode2',
    text: '2 || James Q Quick Origin Story',
  },
  {
    forCheck: 'episode3',
    text: '3 || Amy Duttons Origin Story',
  },
  {
    forCheck: 'episode4',
    text: '4 || Starting a New Development Project',
  },
  {
    forCheck: 'episode5',
    text: '5 || How Do you Start a New Design Project?',
  },
  {
    forCheck: 'episode6',
    text: '6 || Freelancing (Part 1)',
  },
  {
    forCheck: 'episode7',
    text: '7 || Freelancing (Part 2)',
  },
  {
    forCheck: 'episode8',
    text: '8 || The Tech Behind jamesqquick.com',
  },
  {
    forCheck: 'episode9',
    text: '9 || The Tech Behind SelfTeach.me',
  },
  {
    forCheck: 'episode10',
    text: '10 || Tech Behind SelfTeach.me',
  },
]

const CheckBoxTemp = () => {
  const [dataCheck, setDataCheck] = useState([])

  const handleClick = () => {
    Swal.fire({
      title: 'OK',
      text: `${dataCheck.length} items selecionados`,
      icon: 'success',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }

  return (
    <Container>
      <Figure>
        <Image src={podcast} alt="Compressed.fm" />
      </Figure>
      <UlCont>
        <Title>Listen to all the Compressed.fm Episodes</Title>
        <Ul>
          {data.map(({ forCheck, text }, index) => (
            <CheckBox
              key={index}
              forCheck={forCheck}
              text={text}
              setDataCheck={setDataCheck}
              dataCheck={dataCheck}
            />
          ))}
        </Ul>
        <Button type="button" onClick={handleClick}>
          Mark as Played
        </Button>
      </UlCont>
    </Container>
  )
}

export default CheckBoxTemp
