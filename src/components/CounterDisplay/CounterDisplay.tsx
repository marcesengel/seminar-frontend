import React from 'react'
import styled from 'styled-components'

export const CounterDisplay = (): JSX.Element => {
  const count = 0

  return (
    <Counter>{ count }</Counter>
  )
}

const Counter = styled.span`
  margin-bottom: 16px;
  display: inline-block;
  font-size: xx-large;
`