import React from 'react'

function PersonAttributesComponent ({ personAttributes }) {
  return (
    <div><h2>Name: {personAttributes.name}, Age: {personAttributes.age}, Sex: {personAttributes.sex}</h2></div>
  )
}

export default PersonAttributesComponent
