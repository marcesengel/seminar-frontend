import React from 'react'
import styled from 'styled-components'

import { TodoList } from 'components/TodoList/TodoList'

export default (): JSX.Element => (
  <Wrapper>
    <TodoList />
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 32px 48px;
`