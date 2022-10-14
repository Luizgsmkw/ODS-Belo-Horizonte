import styled from "styled-components";

export const ImgOds = styled.img `
    width: 100%;
    object-fit: cover;
    height: 250px;

    @media(max-width: 892px) {
        width: 100%;
        object-fit: fill;
    }
    @media(max-width: 692px) {
        width: 100%;
        object-fit: contain;
        
    }
`

export const Div = styled.div `
    width: 50%;
    margin-top: -30px;
    position: absolute;
    left: 25%;
    background-color: white;
    padding-top: 20px;
    padding-bottom: 60px;
    border-radius: 1px;
    @media(max-width: 1250px) {
        width: 60%;
        left: 18%;
    }

    @media(max-width: 1016px) {
        width: 70%;
        left: 15%;
    }
    @media(max-width: 892px) {
        width: 90%;
        left: 5%;
    }
    @media(max-width: 684px) {
        width: 90%;
        left: 5%;
    }
`

export const P = styled.p `
    font-size: 15px;
    text-align: justify;
    margin: auto;
    margin-bottom: 20px;
    width: 600px;
    line-height: 25px;
    @media(max-width: 684px) {
        width: 500px;
    }
    @media(max-width: 584px) {
        width: 400px;
        font-size: 14px;
    }
    @media(max-width: 484px) {
        width: 350px;
        font-size: 13px;
    }

    @media(max-width: 396px) {
        width: 300px;
        font-size: 13px;
    }
`

export const Span = styled.span `
    font-weight: bolder;

`

export const Button = styled.button `
   position: absolute;
   left: 33%;
   width: 200px;
   border: none;
   padding: 10px;
   border-radius: 8px;
   cursor: pointer;
   color: white
`