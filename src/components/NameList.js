import React from 'react'

function NameList () {
  const nameList = ['Falcon', 'Mercer', 'Glokta']
  return (
    <div>
      <div>
        <h1>This is a list of names manually generated:</h1>
        <h2>{nameList[0]}</h2>
        <h2>{nameList[1]}</h2>
        <h2>{nameList[2]}</h2>
      </div>
      <div>
        <h1>Here is a list of names generated using map:</h1>
        {nameList.map((name, index) => <h2 key={index}>{name}</h2>)}
      </div>
    </div>
  )
}

export default NameList
