import React, { useContext } from 'react'
import { ContextHome, TypeOfContext } from '../context/ContextHome'

const ComponentContext2 = () => {
  const context = useContext(ContextHome)

  const handleClick = () => {
    context.setStateHome({
      titleForAllSection : "titulo nuevo",
      articles: context.stateHome.articles
    })
  }

  return (
    <div>
      <h5>{context.stateHome.titleForAllSection}</h5>
      <p onClick={() => handleClick()}>cambiar title</p>
      ComponentContext2
      <div>
        {context.stateHome.articles.map(article =>
          <p key={article.id}>{article.title}</p>  
        )}
      </div>
    </div>
  )
}

export default ComponentContext2