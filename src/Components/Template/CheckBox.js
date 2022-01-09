import { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useStateCheck } from '../../context/contextCheck'

const Li = styled.li`
  margin-bottom: 24px;
  font-size: 1rem;
`
const Label = styled.label`
  cursor: pointer;
`
const Input = styled.input`
  display: none;
`
const Span = styled.span``

const CheckBox = ({ forCheck, text, setDataCheck, dataCheck }) => {
  const { checkAll, setCheckAll } = useStateCheck()
  const check = useRef()

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setDataCheck([...dataCheck, text])
    } else {
      const filterCheck = dataCheck.filter((item) => item !== text)
      setDataCheck(filterCheck)
    }
  }
  const onKeyDownHandler = (e) => {
    if (e.nativeEvent.shiftKey) {
      setCheckAll(true)
      if (checkAll) {
        check.current.checked = true
        setDataCheck([...dataCheck, text])
      }
    }
  }

  return (
    <Li>
      <Label>
        <Input
          type="checkbox"
          name={forCheck}
          id={forCheck}
          onChange={handleCheckbox}
          ref={check}
        />
        <Span onKeyDown={onKeyDownHandler} tabIndex={0}>
          {text}
        </Span>
      </Label>
    </Li>
  )
}

CheckBox.propTypes = {
  forCheck: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
export default CheckBox
