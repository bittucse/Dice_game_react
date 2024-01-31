import React, { useState } from 'react'
import styled from 'styled-components'
const NumberSelector = ({seterror,selectedNumber,setselectedNumber,error}) => {

    const arrNumber=[1,2,3,4,5,6]

    const numberSelectorHandler=(value)=>{
      setselectedNumber(value)
      seterror("")

    }


  return (
    <NumberSelectorContainer>
    <div className='error'>{error}</div>
    <div className='flexer'>
    {arrNumber.map((value,i)=>(<Box key={i} isSelected={value == selectedNumber} onClick={()=>numberSelectorHandler(value)}>{value}</Box>))}

    </div>
    <p>
        Select Number
    </p>

    </NumberSelectorContainer>
    
  )
}

export default NumberSelector

const NumberSelectorContainer=styled.div`
display: flex;
flex-direction: column;
align-items: end;

.flexer{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;
    font-weight: 700px;
}

.error{
  color: red;
}
`

const Box=styled.div`
height: 72px;
cursor: pointer;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props)=>props.isSelected?"black":"white"};
color: ${(props)=>props.isSelected?"white":"black"};


`