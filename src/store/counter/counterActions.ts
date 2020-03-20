import { ActionType, IncrementAction, DecrementAction, ResetAction } from './counterTypes'

export const increment = (): IncrementAction => ({
  type: ActionType.Increment
})

export const decrement = (): DecrementAction => ({
  type: ActionType.Decrement
})

export const reset = (): ResetAction => ({
  type: ActionType.Reset
})