import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from 'react'
import { Button, OutlineButton } from './styled/Button'
import Rules from './Rules'

const GamePlay = () => {
    const [score,setscore]=useState(0);
    const [selectedNumber,setselectedNumber]=useState();
    const [currentdice,setcurrentdice]=useState(1);
    const [error,seterror]=useState("")




    const generateRandomNumber=(min,max)=>{
        return Math.floor(Math.random() * (max-min) + min);
    }

    const roleDice=()=>{
        const randomnumber=generateRandomNumber(1,7);

        if(!selectedNumber){
            seterror("You have not selected any number")

            return;
        }
        seterror("")

        setcurrentdice((prev)=>randomnumber);



        if(selectedNumber == randomnumber){
            setscore((prev)=>prev+randomnumber);
        }
        else{
            setscore((prev)=>prev-2);
        }

        setselectedNumber(undefined)
    }


    const setter=()=>{
        setscore(0);
    }

    const [ruletoggle,setruletoggle]=useState(false)

const ruleshower=()=>{

    setruletoggle((prev)=>!prev)


}





    return (
        <MainContainer>


            <div className='top_section'>
                <TotalScore score={score}></TotalScore>
                <NumberSelector seterror={seterror} error={error} selectedNumber={selectedNumber} setselectedNumber={setselectedNumber} ></NumberSelector>
            </div>

            <RoleDice currentdice={currentdice} roleDice={roleDice} ></RoleDice>
            <div className='btns'>
                <OutlineButton onClick={setter}>Reset</OutlineButton>
                <Button onClick={ruleshower}>Show Rules</Button>
            </div>
{ruletoggle?<Rules></Rules>:null}


        </MainContainer>
    )
}

export default GamePlay


const MainContainer = styled.main`
.top_section{
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin: 0 auto;
    max-width: 1250px;

}

.btns{
    margin-top:40px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

}
`