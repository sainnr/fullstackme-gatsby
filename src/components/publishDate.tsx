import React, { FC } from 'react'

const monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
]

export const PublishDate: FC<{ dateString: string }> = ({ dateString }) => {
  const date = new Date(dateString)
  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()

  return <>{ day + ' ' + monthNames[monthIndex] + ' ' + year }</>
}
