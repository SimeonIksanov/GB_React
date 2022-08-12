import React from 'react';
import './Message.css'

function Message(props)
{
    return (
        <div className="Message">
            <div>Text passed to 'Message': {props.text}</div>
            <div>{props.someNumber}</div>
        </div>
    )    
}

export default Message;