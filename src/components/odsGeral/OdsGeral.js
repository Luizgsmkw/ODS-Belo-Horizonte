import React from 'react'
import { Link } from 'react-router-dom'
import * as S from '../styles/odsGeralStyled'
const OdsGeral = ({imagem, imagemMobile, number1, number2, number3, number4, title1, title2, title3, title4, text1, text2, text3, text4, buttonStyle}) => {
  return (
    <>
        <S.ImgOds src={imagem} alt="" />
        <S.ImgOdsMobile src={imagemMobile} alt="" />
    <S.Div>
        <S.P> <S.Span>{number1} </S.Span> <S.Span>{title1}</S.Span>{text1}</S.P>
        <S.P> <S.Span>{number2} </S.Span><S.Span>{title2}</S.Span> {text2}</S.P>
        <S.P> <S.Span>{number3} </S.Span><S.Span>{title3}</S.Span>{text3}</S.P>
        <S.P> <S.Span>{number4} </S.Span><S.Span>{title4}</S.Span>{text4}</S.P>
        <Link to='/'><S.Button style={{backgroundColor: buttonStyle}}>Voltar</S.Button></Link>
        
    </S.Div>
    </>
  )
}

export default OdsGeral