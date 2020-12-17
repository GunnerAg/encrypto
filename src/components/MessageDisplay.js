import React, {useEffect, useState} from 'react';
import {Spinner} from 'react-bootstrap'
import './MessageDisplay.css';


export default function MessageDisplay(props) {
    return (
        <div className="container">
            <p className="textStyle">{props.messageDisplay}</p>
        </div>
    )
}
