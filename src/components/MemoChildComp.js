import React from 'react'

function MemoChildComp ({ name }) {
  console.log('Rendering Memo child component')
  return (
    <div>{name}</div>
  )
}

export default React.memo(MemoChildComp)
