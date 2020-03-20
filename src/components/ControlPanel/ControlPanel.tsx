import React, { useCallback } from 'react'
import styled from 'styled-components'

export const ControlPanel = (): JSX.Element => {
  const handleIncrementClick = useCallback(() => {
  }, [ ])
  const handleDecrementClick = useCallback(() => {
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