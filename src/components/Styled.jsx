import styled, {createGlobalStyle} from "styled-components";
import * as S from "./Styled"


export const GlobalStyle = createGlobalStyle `
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
export const Header = styled.header `
/* border: solid 5px; */
display: flex;
justify-content: space-around;
align-items: center;
height: 10vh;

`
export const Box1 = styled.div `
/* border: solid blue 2px; */
display: flex;
justify-content: flex-end;
width: 80vw;
gap:15px;

`

export const Box2 = styled.div `
display: flex;
width: 7vw;
/* border: solid green 2px;  */
align-items: center;
justify-content: space-evenly;

`

export const Box3 = styled.div `
display: flex;
justify-content: space-evenly;
background: #FFC72C;
width: 9vw;
border-radius: 7px;
align-items: center;
height: 5vh;
`
export const Paragrafo = styled.p `
 font-weight: bold;
`
export const Caixa1 = styled.div `
display: flex;
align-items: center;
justify-content: space-between;
width: 60%;
/* border: solid 3px; */
margin-top: 30px;
`

export const Titulo = styled.h1 `
color: white;
font-size: 50px;
font-weight: 800;
width: 50%;
/* border: solid green 3px; */

`
export const Red = styled.span `
color: red;
`
export const Conteiner = styled.section `
background: #FFC72C;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
export const Caixa2 = styled.div `
/* border: solid blue 3px; */
width: 25%;
display: flex;
justify-content: space-between;
margin-top: 40px;
`
export const Imgprincipal = styled.img `
height: 400px;
width: 400px;
`
export const Imgsecundaria = styled.img `
height: 100px;
width: 100px;
`

export const Boxcard = styled.section `
height: 50vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
/* border: solid 3px green; */
background-color: #FEB706;
h2 {
    color: white;
}
`
export const Card = styled.div `
width: 14.6vw;
height: 30vh;
/* border: solid 3px blue; */
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 13px;
button {
    padding: 10px 40px;
    background-color:#FEB706 ;
    border: none;
    border-radius:10px;

}
P {
    line-height: 6vh;
    /* border: solid 2px red; */
}
`

export const Box = styled.div `
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
/* border: solid 3px purple; */

`
export const Footer = styled.footer `
/* border: solid 3px green; */
height: 10vh;
background-color: white;
display: flex;
justify-content: space-between;
padding-right: 60px;
padding-left: 60px;
`
export const Boxfinal = styled.div `
/* border: solid 3px gray; */
display: flex;
align-items: center;
justify-content: space-evenly;
width: 15vw;

`