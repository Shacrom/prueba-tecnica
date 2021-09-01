import React from 'react'
import { useFetchCards } from '../hooks/useFetchCards'
import { Card } from './Card';

export const GridCards = ({ userId }) => {

  const data = useFetchCards(userId);

  return (
    <div className="card-Grid">
      {
        data.map((cardInfo) => {
          return <Card
            key={cardInfo.id}
            cardInfo={cardInfo}
          />
        })
      }
    </div>
  )
}


