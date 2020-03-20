import React from 'react'
import styled from 'styled-components'

import { useSelector } from 'react-redux'
import { getCount } from 'store/counter/counterSelectors'

export const CounterDisplay = (): JSX.Element => {
  const count = useSelector(getCount)

  return (
    <Counter>{ count }</Counter>
  )
}

const Counter = styled.span`
  margin-bottom: 16px;
  display: inline-block;
  font-size: xx-large;
`