import React, { createContext, useState } from 'react'
import { IncreaseComponent } from './IncreaseComponent'
import { DecreaseComponent } from './DecreaseComponent'

interface AppContextInterface {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

export const AppContext = createContext({} as AppContextInterface)

function App() {
  const [count, setCount] = useState(1)

  return (
    <AppContext.Provider value={{ count, setCount }}>
      <div>
        <h1>App</h1>
        <IncreaseComponent />
        <DecreaseComponent />
      </div>
    </AppContext.Provider>
  )
}

export default App
