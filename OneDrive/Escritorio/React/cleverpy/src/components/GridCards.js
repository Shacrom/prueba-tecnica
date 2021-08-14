import React from 'react'
import { useFetchCards } from '../hooks/useFetchCards'
import { Card } from './Card';

export const GridCards = ({ userId }) => {

  const { data, loading } = useFetchCards(userId);

  const handleDeletePost = (id) => {
    delete data[id];
  };

  return (
    <div>
      {
        loading
          ?
          (
            <div className="alert alert-info text">Loading...</div>
          )
          :
          (
            <div className="card-Grid">
              {
                data.map((info) => {
                  return <Card
                    key={info.id}
                    info={info}
                    handleDeletePost={handleDeletePost}
                  />
                })
              }
            </div>
          )
      }
    </div>
  )
}


