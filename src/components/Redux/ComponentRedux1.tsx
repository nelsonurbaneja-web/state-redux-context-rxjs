import React from 'react'
import { useDispatch } from 'react-redux'
import { useAppDispatch } from '../../redux/hooks'
import { createUser, modifyUser } from '../../redux/reducers/user'

const ComponentRedux1 = () => {
  const dispatcher = useAppDispatch()

  const handleClick = () => {
    dispatcher(createUser({
      name: 'Nelson',
      email: 'nelson@gmail.com'
    }))
  }
  const handleClickEdit = () => {
    dispatcher(modifyUser({
      name: 'Nelson Urbaneja'
    }))
  }

  return (
    <div>
      <div>ComponentRedux1</div>
      <button onClick={() => handleClick()}>Enviar info reduxx, create user</button>
      <button onClick={() => handleClickEdit()}>Editar info reduxx, create user</button>
    </div>
  )
}

export default ComponentRedux1