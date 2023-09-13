import React from 'react';
import styled from 'styled-components';
import { BCCy,paletteColor04, paletteColor11 } from '../colors';

export const BTxt = styled.p`
    margin: 0px;
`

export const BPillTxt = styled.p`
  font-size: 9px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #26272f;
`


export const BHead = styled.p`
    font-size: 21px;
    line-height: 1.95;
    margin: 0px;
`

export const BHuge = styled.p`
    font-size: 41px;
    font-weight: 300;
    margin: 0px;
    line-height: 1.22;
    color: ${BCCy};
`

export const TS41 = styled.p`
  font-family: Montserrat;
  font-size: 21px;
  font-style: italic;
  line-height: 1;
  text-align: center;
  color: #333333;
`

export const TS28 = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: ${props=> props.fw ? props.fw : '600'};
  font-style: normal;
  font-stretch: normal;
  color: ${props => props.color? props.color:'#797e96'};
  margin: 0;
  line-height: ${props=> props.lh? props.lh:"1.5"};
  letter-spacing: normal;
  text-align: ${ props => props.ta ? props.ta : "center"};
  width:${props=> props.w?props.w:'100%'};
  ${props=> props.td && 'text-decoration: ' + props.td + ';'}
`

export const BNorm = styled.p`
    height: 55px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #333333;
    -webkit-text-stroke: 0.3px #5b6469;
    width: 90%;
    margin: 17px auto;
`

export const BHeader = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: ${props=>props.fw?props.fw:'500'};
  font-style: normal;
  font-stretch: normal;
  line-height: ${props=>props.lh?props.lh:'1.63'};
  letter-spacing: normal;
  text-align: left;
  color: ${props=>props.cl?props.cl:'#333333'};
  margin: 0px;
`

export const TS14 = styled.p`
  font-family: Montserrat;
  font-size: 19px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
  letter-spacing: normal;
  text-align: center;
  color: ${props => props.clr || '#333333'};
`

export const TS21 = styled.p`
  font-family: Montserrat;
  word-wrap: break-word;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #333333
`

export const TS20 = styled.p`
  font-family: Montserrat;
  font-size: 21px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: center;
  color: #333333;
`

export const TS2 = styled(BTxt)`
  font-family: Montserrat;
  font-size: 1.3em;
  font-weight: 500;
  line-height: 1.43;
  text-align: left;
  color: ${props => (props.color || '#333333')};
`

export const TS15 = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: ${props=> props.fw ? props.fw:'500'};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.69;
  letter-spacing: normal;
  text-align: ${props=>props.ta?props.ta:'center'};
  color: ${props => props.color ? props.color :"#797e96"};
`
export const TS16 = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.69;
  letter-spacing: normal;
  text-align: left;
  color: #797e96;
  padding: 6px;
`

export const TS = styled.p`
  font-family: Montserrat;
  font-size: 27px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.52;
  letter-spacing: normal;
  text-align: left;
  color: #333333;
  margin: 0px;
`

export const TS10 = styled.p`
  font-family: Montserrat;
  font-size: 10px;
  font-weight: ${props=>props.fw?props.fw:"600"};
  margin: 0;
  color: #797e96;
`

export const TS12 = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  margin: 0;
  text-align: left;
  color: #797e96;
`

export const TS9 = styled(BTxt)`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.93;
  letter-spacing: normal;
  text-align: left;
  color: ${props => (props.color || paletteColor04)};
`

export const TS24 = styled.p`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  word-wrap: break-word;
  line-height: 1.67;
  text-align: left;
  color: ${paletteColor11};
  ${props => (props.inline ? 'display: inline;' : null)}
`

export const TS39 = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #333333;
`

export const TS50 = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: ${props=>props.color?props.color:"#191919"};
  text-align: right;
`

export const TS36 = styled.p`
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    text-align: left;
    color: #f2b100;
`


export const TS38 = styled.p`
  font-family: Montserrat;
  font-size: 27px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.52;
  letter-spacing: normal;
  text-align: center;
  color: #333333;
`

export const TS7 = styled.p`
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #aaaaaa;
`

export const TS40 = styled.p`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #5b6469;
`

export const TSX = styled(BTxt)`
    font-size: ${(props) => props.fs ? props.fs : '14px'};
    font-weight: ${(props) => props.fw ? props.fw : '500'};
    color: ${(props) => props.clr ? props.clr : '#333333'};
    ${(props) => props.ta ? `text-align:${props.ta};` : ''}
    ${(props) => props.disp ? `display:${props.disp};` : ''}
    ${(props) => props.txtDec ? `text-decoration:${props.txtDec};` : ''}
    ${(props) => props.mb ? `margin-bottom:${props.mb};` : ''}
    ${(props) => props.mt ? `margin-top:${props.mt};` : ''}
    ${props => props.ml && 'margin-left:' + props.ml + ';'}
    ${props => props.padding && 'padding:' + props.padding + ';'}
    ${props => props.wid && 'width:' + props.wid + ';'}
    ${props => props.bgClr && 'background-color:' + props.bgClr + ';'}
    ${props => props.mr && 'margin-right:' + props.mr + ';'}
    ${props => props.height && 'height:' + props.height + ';'}
    ${props => props.lh && 'line-height:' + props.lh + ';'}
    ${props => props.ai && 'align-items:' + props.ai + ';'}
    ${props => props.zi && 'z-index:' + props.zi + ';'}
    ${props => props.margin && 'margin:' + props.margin + ';'}
    ${props => props.jc && 'justify-content:' + props.jc + ';'}
`;

export const Info = styled.p`
  font-family: Montserrat;
  font-size: 1.3em;
  font-weight: 500;
  line-height: 1.43;
  color: #333333;
`
export const TS15A = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: ${props=> props.fw ? props.fw:'500'};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.69;
  letter-spacing: normal;
  color: ${paletteColor11};
`
export const List = styled.ol`
  text-align: left;
`
export const ListNumber = styled.li`
  color: ${paletteColor04};
  margin-bottom: -10px;
`
