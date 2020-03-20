import { ActionType, IncrementAction, DecrementAction } from './counterTypes'

export const increment = (): IncrementAction => ({
  type: ActionType.Increment
})

export const decrement = (): DecrementAction => ({
  type: ActionType.Decrement
})