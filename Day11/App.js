import React from 'react'
import ReactDOM from 'react-dom/client'
import { createContext } from 'react'
import ComponentA from './src/ComponentA';
import ComponentB from './src/ComponentB';
import ComponentC from './src/ComponentC';
export const Data=createContext();
const App = () => {
  const name="Harsh"
  return (
    <div>
      <Data.Provider value={name}>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>

      </Data.Provider>
    </div>
  )
}

export default App


ReactDOM.createRoot(document.getElementById('root')).render(<App/>)