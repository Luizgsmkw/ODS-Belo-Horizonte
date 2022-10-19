import styled from "styled-components";

export const ContainerHome = styled.section `
    background-color: #F5F1EE;
    min-height: 100vh;
    color: #A9D9D0;
    padding: 30px;

    @media(max-width: 550px)  {
    padding: 10px;
    padding-top: 60px;
    }

    @media(max-width: 370px)  {
    padding: 0px;
    padding-top: 60px;
    }
`

export const Div = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const H1 = styled.h1 `
    font-size: 120px;
    font-weight: bold;
    display: flex;
    align-items: center;
    @media(max-width: 750px)  {
    font-size: 100px;
    }

    @media(max-width: 650px)  {
    font-size: 80px;
    margin-bottom: 5px;
    }

    @media(max-width: 650px)  {
    font-size: 70px;
    }

    @media(max-width: 470px)  {
    font-size: 50px;
    }
`

export const CirculoOds = styled.img `
 width: 110px;
 @media(max-width: 650px)  {
    width: 95px;
 }
 @media(max-width: 470px)  {
    width: 70px;
    }
`

export const H2 = styled.h2 `
    font-size: 60px;
    padding-left: 5px;

    @media(max-width: 1000px)  {
    font-size: 50px;
 }

 @media(max-width: 850px)  {
    font-size: 40px;
 }

 @media(max-width: 700px)  {
    font-size: 30px;
 }

 @media(max-width: 550px)  {
    font-size: 20px;
 }
    
    
`
export const DivImgs = styled.div `
margin-top: 50px;
display: flex;
justify-content: space-between;
width: 900px;
flex-wrap: wrap;

@media(max-width: 950px)  {
    width: 700px;
 }

 @media(max-width: 750px)  {
    width: 500px;
 }

 @media(max-width: 550px)  {
    width: 350px;
    justify-content: center;
 }
`

export const OdsImg = styled.img `
    width: 150px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

    @media(max-width: 950px)  {
    width: 140px;
    margin-bottom: 30px;
    margin-right: 10px;
 }
`

