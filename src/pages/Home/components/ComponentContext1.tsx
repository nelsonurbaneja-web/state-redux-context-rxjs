import React, { useContext } from 'react'
import { ContextHome, useContextHomeProvider } from '../context/ContextHome'

const ComponentContext1 = () => {
  const context = useContextHomeProvider()

  return (
    <div>
      <h5>{context.stateHome.titleForAllSection}</h5>
      <div>ComponentContext1</div> 
    </div>
  )
}

export default ComponentContext1