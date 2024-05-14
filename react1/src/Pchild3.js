import React from 'react'
import Pchild4 from './Pchild4'


const Pchild3 = (props) => {

 

  return (
    <>
    <div> props Child3</div>
    <h1>good</h1>
    <Pchild4 d={props.c}/>
    </>
  )
}

export default Pchild3