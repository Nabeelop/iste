import Image from 'next/image'
import React from 'react'

export interface Normalevent {
  title: string
  image: string | null
  description: string
  link?: string // Added link property for redirection
}

const EventCard = ({eventDetails}: {eventDetails: Normalevent}) => {
  return (
    <div className="">
      <h2>{eventDetails.title}</h2>
      <div className='w-[200px] h-[400px] border border-white rounded-lg'>
        {eventDetails.image && <Image src={eventDetails.image} alt={eventDetails.title}/>}
      </div>
      <p>{eventDetails.description}</p>
    </div>
  )
}

export default EventCard