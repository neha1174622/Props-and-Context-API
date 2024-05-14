import React from 'react'
import Pchild3 from './Pchild3'

const Pchild2 = (props) => {
  return (
    <>
    <div>Props Child2</div>
    <Pchild3 c={props.b}/>
    </>
  )
}

export default Pchild2