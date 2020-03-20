import { useDispatch } from 'react-redux'
import { useMemo } from 'react'

interface ActionCreators {
  [Key: string]: (...args: any[]) => { type: string; };
}

type WrappedActionCreators<T extends ActionCreators> = {
  [Key in keyof T]: (...args: Parameters<T[Key]>) => void;
}

export const useActions = <T extends ActionCreators>(actionCreators: T) => {
  const dispatch = useDispatch()
  
  return useMemo(() => {
    const result: Partial<WrappedActionCreators<T>> = {}

    for (const [ key, actionCreator ] of Object.entries(actionCreators)) {
      result[key as keyof T] = (...args: Parameters<typeof actionCreator>) => {
        dispatch(actionCreator(...args))
      }
    }

    return result as WrappedActionCreators<T>
  }, [ actionCreators, dispatch ])
}