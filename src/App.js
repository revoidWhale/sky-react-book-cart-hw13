import styled from 'styled-components'
import Console from './components/Console'
import Title from './components/Title'

const AppWrapper = styled.div`
  background: black;
  width: 100%;
  paddind: 2rem;
  min-height: 100vh;
`

const App = () => (
  <AppWrapper>
    <Title>Console CMD. SKYPRO_REACT</Title>
    <Console />
  </AppWrapper>
)

export default App
