import React from 'react'
import { useParams } from 'react-router-dom'

function EventDetailPage() {
const param=useParams()

  return (
    <div><h1>EventDetailPage</h1>
      <p>Param Id:{ param.eventId}</p>
    </div>
  )
}

export default EventDetailPage