import React from 'react'

const Child = (props) => {
    console.log(props.data);
  return (
      <div>{ props.data}</div>
  )
}

export default Child