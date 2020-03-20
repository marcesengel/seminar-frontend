export interface State {
  count: number;
}

export enum ActionType {
  Increment = 'COUNTER/INCREMENT',
  Decrement = 'COUNTER/DECREMENT',
  Reset = 'COUNTER/RESET'
}

export interface IncrementAction {
  type: ActionType.Increment;
}

export interface DecrementAction {
  type: ActionType.Decrement;
}

export interface ResetAction {
  type: ActionType.Reset;
}

export type Action = IncrementAction | DecrementAction | ResetAction;