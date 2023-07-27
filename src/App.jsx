import './App.css'
import FormComponents from './FormComponent'
import CatComponents from './CatComponents'
import React, { useState } from 'react';

export const DataContext = React.createContext()

function App() {
  const [loginState, setLoginState] = useState(false)
  return (
    <>
        {/* login */}
        <DataContext.Provider value={{ loginState, setLoginState }}>
        <div className="App">
            {loginState === true && <CatComponents />}
            {loginState === false && <FormComponents />}
        </div>
        </DataContext.Provider>
    </>
  )
}

export default App
