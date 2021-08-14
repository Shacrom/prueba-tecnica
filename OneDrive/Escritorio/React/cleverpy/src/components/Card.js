import React, { useRef, useState } from 'react';
import '../styles/card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


export const Card = ({ cardInfo }) => {

  const { body, title, userId } = cardInfo;
  const [showCard, setShowCard] = useState(true);

  return (
    <>
      {
        showCard
        &&
        <div className="card" >
          <ol>
            <li>User id: {userId}</li>
            <li>Title: {title}</li>
            <li>Body: {body}</li>
          </ol>
          <button className="btn btn-primary" onClick={() => {setShowCard(false)}}>
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
          </button>
        </div>
      }
    </>
  )
}
