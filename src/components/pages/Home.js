import React from 'react'
import * as S from '../styles/homeStyled'
import circuloODS from '../img/ods-roda-2-1.png';
import erradicarPobreza from '../img/ods1.jpg';
import fomeZero from '../img/ods2.png';
import saudeBemEstar from '../img/ODS3-1.jpg';
import educacaoQualidade from '../img/ods4.png';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <S.ContainerHome>
        <S.Div>
            <S.H1>OBJETIV<S.CirculoOds src={circuloODS} alt="" />S</S.H1>
            <S.H2>de Desenvolvimento Sustentável</S.H2>
            <S.H2>Belo Horizonte</S.H2>
        </S.Div>
        <S.DivImgs>
            <Link to='/erradicarPobreza'><S.OdsImg src={erradicarPobreza} alt="" /></Link>
            <Link to='/fomeZero'><S.OdsImg src={fomeZero} alt="" /></Link>
            <Link to='/saudeBemEstar'><S.OdsImg src={saudeBemEstar} alt="" /></Link>
            <Link to='/educacaoQualidade'><S.OdsImg src={educacaoQualidade} alt="" /></Link>
        </S.DivImgs>
    </S.ContainerHome>
  )
}

export default Home