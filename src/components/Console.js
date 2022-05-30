/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Line from './Line'

const circlePit = keyframes`
transform : rotateZ()
`

const StyledConsole = styled.textarea`
 width: 100%
 height: 70vh;
 background: black;
 font-size: 24px;
 border: none;
 resize: none;
 &:focus{
   outline:none
 }
 animation : ${circlePit} 2s
`

const Console = (color, ...props) => {
  const [lines, setLines] = useState(['C/users/SKYPRO_REACT>'])

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      setLines([...lines, 'C/users/SKYPRO_REACT>'])
    }
  }

  return (
    <div>
      {lines.map((line) => (
        <Line>{line}</Line>
      ))}
      <StyledConsole color={color} onKeyPress={onKeyPress} {...props} />
    </div>
  )
}
export default Console
