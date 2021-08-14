import React from 'react';
import '../styles/card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export const Card = (props) => {
    const { body, id, userId, title } = props.info;
    
    return (
        <div className="card">
            <ol>
                <li>User id: {userId}</li>
                <li>Title: {title}</li>
                <li>Body: {body}</li>
            </ol>
            <button className="btn btn-primary" >
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </button>
        </div>
    )
}
