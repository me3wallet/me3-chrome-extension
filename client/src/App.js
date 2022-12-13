import React from 'react'
import styled from 'styled-components'
import {AllSet} from "./pages/login"

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center
`
const Container = styled.div`
    width: 375px;
    height: 600px;
    border: solid 1px;
    display: flex;
    align-items: center;
    justify-content: center
`

function App() {
  return (
    <Wrapper>
    <Container>
      <AllSet />
    </Container>
    </Wrapper>
  );
}

export default App;
