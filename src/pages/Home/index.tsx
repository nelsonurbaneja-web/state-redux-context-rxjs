import React from 'react'
import ComponentContext1 from './components/ComponentContext1'
import ComponentContext2 from './components/ComponentContext2'
import { ContextHomeProvider } from './context/ContextHome'

const Home = () => {
  return (
    <ContextHomeProvider>
      <ComponentContext1 />
      <ComponentContext2 />
    </ContextHomeProvider>
  )
}

export default Home