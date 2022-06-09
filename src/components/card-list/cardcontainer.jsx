import React, { Component } from 'react'
import './card-container.styles.css'
function CardContainer({ monster }) {
  const { name, id } = monster
  return (
    <div className={'card-container'}>
      <img
        src={`https://robohash.org/${id}?set=set1&size=200 x200`}
        alt={`monster${name}`}
        name={name}
      />
      <h1>{name}</h1>
    </div>
  )
}

export default CardContainer
{
}
