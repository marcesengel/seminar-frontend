import React from 'react'
import styled from 'styled-components'

import { CounterDisplay } from 'components/CounterDisplay/CounterDisplay'
import { ControlPanel } from 'components/ControlPanel/ControlPanel'

export default (): JSX.Element => (
  <Wrapper>
    <CounterDisplay />

    <ControlPanel />
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 32px 48px;
`