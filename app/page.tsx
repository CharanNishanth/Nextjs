"use client"
import Image from 'next/image';
import {FormattedMessage,IntlProvider} from 'react-intl';
import { LoginBgImgDiv,NewSigninContainer,ImgContainer, CenterContainer,WelcomeTxt, LoanInformation,BTxt } from './skins';
const LoginBG = 'https://ik.imagekit.io/kreditbee/app-static/Login/login_bg.svg';
const LightLogo = 'https://ik.imagekit.io/kreditbee/app-static/Login/only-bee.svg';
// import parse from 'html-react-parser';
// import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import PreLoginPdtListing from './PreLoginProduct/PreLoginPdtListing';

export default function Home() {
  const getPersonalUpto = {
    id:'getPersonalUpto',
    defaultMessage: 'Get instant Personal Loan upto {max}'
  }
  return (
    <IntlProvider locale='en'>
    <div>
      <LoginBgImgDiv imgSrc={LoginBG} />
      <NewSigninContainer>
        <ImgContainer>
        <img src={LightLogo} alt='brand-logo' />
        </ImgContainer>
        <CenterContainer>
        <WelcomeTxt>Welcome to KreditBee</WelcomeTxt>
        <LoanInformation >
          <FormattedMessage
          {...getPersonalUpto}
          values={{
            max: (
              <BTxt className='wrappper'>
                <span className='maxAmount'>
                  4 Lakhs
                </span>
              </BTxt>

            ),
          }}
           />

        </LoanInformation>
        </CenterContainer>
        <PreLoginPdtListing  height="326px" padding='0 0 24px' />
      </NewSigninContainer>

    </div>
    </IntlProvider>
   
  )
}
