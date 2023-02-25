import { useContext } from 'react'
import { AppContext } from './App'

export function IncreaseComponent() {
  const { count, setCount } = useContext(AppContext)
  return (
    <div>
      <h1>IncreaseComponent: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Aumentar
      </button>
    </div>
  )
}
