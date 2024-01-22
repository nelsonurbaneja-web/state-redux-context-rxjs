import React, { useEffect } from 'react'
import { useContextHomeProvider } from '../../pages/Home/context/ContextHome'
import { sharingInformationService } from '../../services/sharing-information'

export const ComponentRxjs1 = () => {
  
  const handleClick = (value: boolean) => {
    sharingInformationService.setSubject(value)
  }

  return (
    <div>
      <button onClick={() => handleClick(true)}>Enviar informacion</button>
    </div>
  )
}
