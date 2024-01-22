import { useEffect, useState } from 'react'
import { getTodos } from '../../services/getTodos'
import { sharingInformationService } from '../../services/sharing-information'


export const ComponentRxjs2 = () => {
  const subscription$ = sharingInformationService.getSubject()
  const [info, setInfo] = useState<string | number>("")
  
  useEffect(() => {
    subscription$.subscribe((data) => {
      if(!data) return 
      getTodos().then((data: any) => {
        setInfo(data)
        console.log(data)
      })
    })
  }, [])

  return (
    <div>Component2 Rxjs { JSON.stringify(info) }</div>
  )
}