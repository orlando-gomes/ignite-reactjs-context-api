import { useContext } from 'react'
import { AppContext } from './App'

export function DecreaseComponent() {
  const { count, setCount } = useContext(AppContext)
  return (
    <div>
      <h1>DecreaseComponent: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Diminuir</button>
    </div>
  )
}
