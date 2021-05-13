import React from 'react'
import styled from 'styled-components'

const App = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Hello world !!</h1><br/>
        <Stars />
        <Stars2 />
        <Stars3 />
      </Wrapper>
    </Container>
  )
}
const Container = styled.div`
  height: 100%;
  
  overflow: hidden;
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
`
const Wrapper = styled.div`
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`
const Stars = styled.div`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${box_shadow(700)} ;
  animation: animStar 50s linear infinite;

  &:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${box_shadow(700)} ;
  }

  @keyframes animStar {
  from {
    transform: translateY(-2000px);
  }
  to {
    transform: translateY(0px);
  }
  from {
    transform: translateY(-2000px)
  }
  to {
    transform: translateY(0px);
  }
}
`
const Stars2 = styled.div`
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: ${box_shadow(300)} ;
  animation: animStar 100s linear infinite;

  &:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: ${box_shadow(300)} ;
  }

  @keyframes animStar {
  from {
    transform: translateY(-2000px);
  }
  to {
    transform: translateY(0px);
  }
}

`
const Stars3 = styled.div`
  width: 3px;
  height: 3px;
  background: transparent;
  animation: animStar 130s linear infinite;
  box-shadow: ${box_shadow(150)} ;

  &:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: ${box_shadow(150)} ;
  }

  @keyframes animStar {
  from {
    transform: translateY(-2000px);
  }
  to {
    transform: translateY(0px);
  }
}

`
/*
const Container = styled.div`
  background: #000;
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
`
*/
function box_shadow(n){
  let y="";
  for (let i = 0; i < n; i++) {
      y += `${Math.floor(Math.random() * 2000) + 1}px ${Math.floor(Math.random() * 2000) + 1}px #FFF , `;
  }
  return y.replace(/,(\s+)?$/, '');
}
export default App
