import React from "react";
import { json, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData('event-detail');
  

  return (

      <EventItem event={data.event} />
   
  );
}

export default EventDetailPage;

export async function loader({params}) {
  const id = params.eventId;

  const response = await fetch(`http://localhost:8080/events/`+id);

  if (!response.ok) {
    // throw new Response(JSON.stringify(),{status:500});
    return json({ message: "some error occur" }, { status: 500 });
  } else {
    return response;
  }
}
