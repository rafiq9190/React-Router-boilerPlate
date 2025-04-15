import React from 'react'
import EventForm from '../components/EventForm'
import {json,redirect} from 'react-router-dom'
function NewEventPage() {
  return (
    <div><EventForm/></div>
  )
}

export default NewEventPage

export async function action({ request }) {

  let data = await request.formData()
  let eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description:data.get('description')
  }
  let response=await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
      'Content-Type':"application/json"
    },
    body:JSON.stringify(eventData)
  })
  if (!response.ok) {
    throw json({message:'Could not save event'},{status:500})
  }
  return redirect('/events')
}