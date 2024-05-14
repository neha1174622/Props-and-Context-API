import React from 'react'
import Pchild2 from './Pchild2'

const Pchild1 = (props) => {
  return (
    <>
    <div>Props Child1</div>
    <Pchild2 b={props.a}/>
    </>
  )
}

export default Pchild1