/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: ${(props) => props.color || 'green'};
`

const Title = (props) => <StyledTitle {...props} />

export default Title
