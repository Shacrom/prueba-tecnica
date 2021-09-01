import React, { useState } from 'react';
import '../styles/card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring'

export const Card = ({ cardInfo }) => {

  const { body, title, userId } = cardInfo;
  const [showCard, setShowCard] = useState(true);

  const transition = useTransition(showCard, {
    from: { x: -100, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: -100, y: 800, opacity: 0 },
  });

  return (
    <>
      {
        showCard
        &&
        transition((style, card) =>
          <animated.div className="card" style={style}>
            <ol>
              <li>User id: {userId}</li>
              <li>Title: {title}</li>
              <li>Body: {body}</li>
            </ol>
            <button className="btn btn-primary" onClick={() => { setShowCard(false) }}>
              <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </button>
          </animated.div>)
      }
    </>
  )
}
