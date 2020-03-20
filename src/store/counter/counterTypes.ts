export interface State {
  count: number;
}

export enum ActionType {
  Increment = 'COUNTER/INCREMENT',
  Decrement = 'COUNTER/DECREMENT'
}

export interface IncrementAction {
  type: ActionType.Increment;
}

export interface DecrementAction {
  type: ActionType.Decrement;
}

export type Action = IncrementAction | DecrementAction;