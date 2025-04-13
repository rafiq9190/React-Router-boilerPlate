import React from 'react'
import PageContent from './PageContent'
import { useRouteError } from 'react-router-dom'

function Error() {
    const error = useRouteError()
    console.log({error})
    let title = "An Error Occure"
    let message = "Something went wrong"
    
    if (error.status == 500) {
        message=error.data.message
    }
    if (error.status == 404) {
        title="Not Found"
        message='Could not find page or resource'
    }

  return (
      <div><PageContent title={title}>{ message}</PageContent></div>
  )
}

export default Error