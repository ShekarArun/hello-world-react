import React from 'react'
import PersonAttributesComponent from './PersonAttributesComponent'

function PeopleAttributesList () {
  const peopleAttributes = [
    { name: 'Alex', age: 25, sex: 'M' },
    { name: 'Honnold', age: 26, sex: 'F' },
    { name: 'Bartechus', age: 156, sex: 'M' }
  ]

  const peopleAttributesComponentList = peopleAttributes.map(person => <PersonAttributesComponent key={`${person.name} + ${person.age}`} personAttributes={person} />)

  return (
    <div>
      <h1>Here is a list of people's information generated as a child component for each entry:</h1>
      {peopleAttributesComponentList}
    </div>
  )
}

export default PeopleAttributesList
