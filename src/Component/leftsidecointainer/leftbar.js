import React from 'react';
import "./leftbar.css";

export default function Leftbar() {
  return (
    <div className='leftbar'>
      <div className='notificationcontaner'>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p>Notification</p>
          <p style={{ color: '#aaa' }}>See all</p>
        </div>
      </div>
    </div>
  )
}