import React from 'react'
import { Outlet } from 'react-router-dom'
import EventNavigation from '../components/EventsNavigation'
function EventRoot() {
  return (
    <div><div>
    <EventNavigation />
    <main>
        <Outlet/>
      </main>
</div></div>
  )
}

export default EventRoot