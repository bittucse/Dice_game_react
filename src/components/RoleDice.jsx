import React, { useState } from 'react'
import styled from "styled-components"

const RoleDice = ({currentdice,roleDice}) => {



    return (
        <DiceContainer>
            <div className='dice'onClick={roleDice}>
                <img src={`/images/dice/dice_${currentdice}.png`} alt="dice" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
}

export default RoleDice


const DiceContainer=styled.div`

display: flex;
flex-direction:column;
align-items: center;
margin-top:48px;

p{
    font-size: 24px;
}

.dice{
    cursor: pointer;
}



`