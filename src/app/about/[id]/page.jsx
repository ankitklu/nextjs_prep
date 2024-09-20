import React from 'react'

function Random(props) {
    const id= props.params.id;
    console.log("the parameter is",id);
  return (
    <div>The Random id is: {id}</div>
  )
}

export default Random;