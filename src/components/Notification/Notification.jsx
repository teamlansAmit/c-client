import React, { useContext } from 'react';

import './Notification.css';

import { SocketContext } from '../../SocketContext';

const Notification = () => {

  const { answerCall, call, callAccepted } = useContext(SocketContext);

  // console.log(call);

  return (
    <>
      {
        call.isReceivedCall && !callAccepted && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1>{call.name} is calling:</h1>
            <button variant='contained' color='primary' onClick={answerCall}>
              Answer
            </button>
          </div>
        )
      }
    </>
  )
}

export default Notification;