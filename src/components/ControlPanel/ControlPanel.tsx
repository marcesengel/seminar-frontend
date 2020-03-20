import React, { useCallback } from 'react'
import styled from 'styled-components'

import { useDispatch } from 'react-redux'
import { increment, decrement, reset } from 'store/counter/counterActions'

export const ControlPanel = (): JSX.Element => {
  const dispatch = useDispatch()
  
  const handleIncrementClick = useCallback(() => {
    dispatch(increment())
  }, [ dispatch ])
  const handleDecrementClick = useCallback(() => {
    dispatch(decrement())
  }, [ dispatch ])
  const handleResetClick = useCallback(() => {
    dispatch(reset())
  }, [ dispatch ])

  return (
    <Wrapper>
      <Button onClick={handleDecrementClick}> - </Button>
  
      <Button onClick={handleResetClick}> Reset </Button>

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