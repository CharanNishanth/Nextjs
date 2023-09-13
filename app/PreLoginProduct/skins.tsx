import {
    paletteColor02,
    paletteColor03,
    paletteColor04,
    paletteColor08,
    paletteColor11,
    paletteColor20,
    paletteColor19,
    paletteColor16,
    paletteColor07,
    paletteColor21,
  } from '../colors';
  import styled from 'styled-components';
  import BFlexDiv from '../components/BFlexDiv';
  import {TSX} from '../components/BTypo';
  import * as React from 'react';

  interface StyledPreLoginProps {
    noPad?: string;
    margin?: string;
    fxd?: any;
    noMargin?: any;
    padding?: any;
    postLogin?: boolean;
    checkoutOverflow?: string;
    noHeight?: string;
    bottom?: string;
    bgClr?: string;
    border?: string;
    isWebMob?: any;
    isEWA?: boolean;
  }
  
  interface LoanCardConProps {
    isWebMob?: any;
  }

  export const NHPCon = styled.div<StyledPreLoginProps>`
  padding:${({padding}) => padding || '2.5rem 0'};
  background-color: ${paletteColor07};
  overflow: auto;
  height:  calc(100vh - 36px);
  /* ${({isEWA}) => isEWA && 'display: flex; flex-direction: column; justify-content: center;'} */
`;

export const StyledBtnCon = styled.div<StyledPreLoginProps>`
  width: 100%;
  bottom: 0px;
  z-index: 100; //added z-index such that it should be over other divs
  position: fixed; //made the position fixed at the bottom
  background-color: ${paletteColor08};
  ${props => (props.fxd ? 'box-shadow: 0 -1px 6px 0 rgba(93, 113, 188, 0.1), 0 -1px 4px 0 rgba(0, 0, 0, 0.16);' : '')}
`;

export const PdtItemsNewCon = styled.div<StyledPreLoginProps>`
  ${props => (props.padding ? props.padding : 'padding-bottom: 56px')};
`;
export const PdtListing = styled.div<StyledPreLoginProps>`
  margin: ${props => props.margin || '16px 24px'};
`;

export const StyledFlexDiv = styled.div`
  ${props => props.position && 'position:' + props.position + ';'}
  ${props => props.as && 'align-self:' + props.as + ';'}
  ${props => props.top && 'top:' + props.top + ';'}
  ${props => props.left && 'left:' + props.left + ';'}
  ${props => props.right && 'right:' + props.right + ';'}
  ${props => props.bgClr && 'background-color:' + props.bgClr + ';'}
  ${props => props.margin && 'margin:' + props.margin + ';'}
  ${props => props.borderTop && 'border-top: solid 0.5px ' + paletteColor04 + ';'}
  ${props => props.borderBtm && 'border-bottom: solid 0.5px ' + paletteColor04 + ';'}
  ${props => props.padding && 'padding:' + props.padding + ';'}
  ${props => props.ta && 'text-align:' + props.ta + ';'}
`;

export const ExtendedTSX = styled.div``;

export const VASCon = styled.div`
justify-content: center;
display: flex;
height: 5rem;
padding: 0.75rem 3.656rem -0.25rem 3.5rem;
box-shadow: 0 -0.5px 0 0 ${paletteColor16}, 0 0.5px 0 0 ${paletteColor16};
background-color: ${paletteColor08};
`;
