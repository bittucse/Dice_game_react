import React from 'react';
import styled from 'styled-components';
import { Button } from './styled/Button';

const StartGame = ({toggle}) => {
  return (
    <Container>
    <div><img src="/images/dices 1.png" alt="" /></div>
    <div>
        <div className='content'><h1>DICE GAME</h1></div>
        <Button onClick={toggle}>Play Now</Button>

    </div>

    </Container>
  )
}

export default StartGame

const Container=styled.div`
max-width: 1180px;
height: 100vh;
display: flex;
margin: 0 auto;
align-items: center;

.content{
    h1{
        white-space: nowrap;
        font-size: 96px;
    }
}

`






