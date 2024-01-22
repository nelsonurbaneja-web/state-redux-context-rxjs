import React from 'react'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../../../redux/hooks'

const ComponentRedux2 = () => {
  const state = useAppSelector(store => store.user)

  return (
    <div>
      ComponentRedux2
      <div>
        <p>{state?.name}</p>
        <p>{state?.email}</p>
      </div>
    </div>
  )
}

export default ComponentRedux2