import React from 'react'

export default function Post({ data }) {
  let { title, body, id} = data
  return (
    <div>
      <h2> {title} </h2>
      <p>{body}</p>
    </div>
  )
}
