import React from 'react'

//notification popup for when a letter has been previously entered
const Notification = ({showNotification}) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`} >
      <p>You have already entered this letter</p>
    </div>
  );
}

export default Notification