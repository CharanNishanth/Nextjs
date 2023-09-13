import styled from 'styled-components';
import { paletteColor19,paletteColor08,paletteColor04,paletteColor16 } from './colors';

interface StyledBtnProps {
    fxd?: boolean;
    lh?: number;
    mb?: any;
    mt?: any;
    noHeight?: any;
    height?: any;
    imgSrc?: any;
    small?: any;
  }

export const LoginBgImgDiv = styled.div<StyledBtnProps>`
  background-image: url(${({ imgSrc }) => imgSrc});
  position: absolute;
  width: 100%;
  height: ${({ small }) => (small ? '190' : '290')}px;
  background-position: center;
  background-size: cover;
  background-color: #101523;
`;

export const NewSigninContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 10;
`;

export const ImgContainer = styled.div`
  text-align: center;
  padding: 2.75rem 0 1rem;
  > img {
    z-index: 10;
    top: 3.25rem;
    left: 0;
    right: 0;
    margin: auto;
    height: 4.875rem;
    padding: 18px;
    box-shadow: 0 2px 4px 1px ${paletteColor19}, 0 1px 1px 0 ${paletteColor19};
    background-color: ${paletteColor08};
    border-radius: 50%;
    min-width: 78px;
    min-height: 78px;
  }
`;

export const CenterContainer = styled.div`
  text-align: center;
`;

export const WelcomeTxt = styled.span`
  margin-left: 10px;
  font-size: 21px;
  font-weight: 500;
  line-height: 1.95;
  text-align: center;
  color: ${paletteColor08};
  > span {
    font-weight: 600;
  }
`;

export const LoanInformation = styled.div`
  margin: 0.625rem auto 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.69;
  color: ${paletteColor04};
  & .wrapper {
    margin: 6px 0;
  }
  & span.maxAmount {
    font-size: 1.125rem;
    font-weight: 600;
  }
`;

export const BTxt = styled.div`
    margin: 0px;
`;