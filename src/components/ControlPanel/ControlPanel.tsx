import React, { useCallback } from 'react'
import styled from 'styled-components'

import { useDispatch } from 'react-redux'
import { increment, decrement } from 'store/counter/counterActions'

export const ControlPanel = (): JSX.Element => {
  const dispatch = useDispatch()
  
  const handleIncrementClick = useCallback(() => {
    dispatch(increment())
  }, [ ])
  const handleDecrementClick = useCallback(() => {
    dispatch(decrement())
  }, [ ])

  return (
    <Wrapper>
      <Button onClick={handleDecrementClick}> - </Button>
  
      <Button onClick={handleIncrementClick}> + </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`

const Button = styled.button`
  flex: 1 0 0px;

  &:not(:last-child) {
    margin-right: 16px;
  }
`