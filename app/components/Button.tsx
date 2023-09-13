
import * as React from 'react';
import styled from 'styled-components';
import Typography from './Typography';

import {
  paletteColor08,
  paletteColor01,
  paletteColor03,
  paletteColor06,
  paletteColor02,
  paletteColor04,
  paletteColor16,
  paletteColor05,
  paletteColor14,
  paletteColor15,
} from '../colors';


type ButtonType = 'bigButton' | 'errorButton';

export interface ButtonProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
 /**
  * Controls loading visibilty (true - show loading dots, false - don't show loading dots)
 */
 loading?: boolean;
 /**
  * Provide the type of Button like bigButton, smallButton, arrowButton, specialButton
 */
 btnType?: ButtonType;
 /**
  * Controls state of button (true - button is not active, not clickable, false - button is active, clickable)
 */
 disabled?: boolean;
 /**
  * Controls the size of the Button text (true - text will be 2points down by default size value, false - default size will be
  * given )
 */
 isSmallText?: boolean;
 /**
  * Button text content will be shown by this property
 */
 text?: string;
 /**
  * Controls the variant of Button (true - secondary button will be shown having no background only border,
  * false - Default, primary button will be shown with background color)
 */
 secondary?: boolean;
 /**
  * Provide unique identifier for content, used for automation purpose
 */
 dataCy?: string;
 /**
  * Value set by this property will be used for amount on special button
 */
 feeAmount?: string;
 /**
  * Controls the text style of button is capital (true - text will be in capital letters, false - text will be in small letters)
 */
 isCaps?: boolean;
 /**
  * For arrow button only, alignment of the text will be control by this property (value can be left, right and center)
 */
 textAlign?: string;
 /**
  * Controls whether the arrow image should be shown with text (true - arrow will be shown along with text, false - default, only text is shown)
 */
 withArrow?: boolean;
 /**
  * Function to be called on button click
 */
 onClick?: (...args: any[]) => any;
 /**
  * Content for error Message
 */
 errorMsg?: string;
 /**
  * Provide the width for button (Supported only for smallButton variant)
 */
 width?: string;
}

export interface ButtonInternalProp {
 /**
  * disabledClr is internal property used to handle disabled state of the button during loading
 */
  disabledClr?: boolean;
}

const StyledButton = styled.button<ButtonProp>`
  height:3rem;
  cursor: pointer;
  border-radius: 0.3125rem;
  position: relative;
`;

const PrimaryButton = styled(StyledButton)<ButtonProp & ButtonInternalProp>`
  background-color: ${props => (props.disabledClr ? paletteColor06 : paletteColor01)};
  border: none;
  width: 100%;
  text-align-last: center;
`;

const BigButtonPadding = styled.div<ButtonProp>`
  padding:${props => (props.secondary ? "1rem 1.5rem 0.5rem 1.5rem" : "0.5rem 1.5rem 1rem 1.5rem")};
`;

const ErrorButtonPadding = styled.div`
  padding: 1rem 1.5rem 0.5rem;
`;

const SecondaryButton = styled(StyledButton)<ButtonProp & ButtonInternalProp>`
  background-color: ${paletteColor08};
  text-align-last: center;
  border: 0.125rem solid ${props => (props.disabledClr? paletteColor05 : paletteColor02)};
  width: 100%;
`;

const TypoWithIcon = styled.div`
  display: inline-flex;
  margin-left: 2rem;
`;

const LoaderCon = styled.div`
  display: inline-flex;
  justify-content: center;
`;

const bigButtonLoading = (isLoading: boolean, isSecondary: boolean, isSmallText: boolean, text: string, dataCy: string) => {
  if (!isLoading) {
    return null;
  }
  return (
    <div>
      {text !== '' ? (
      <TypoWithIcon>
        <Typography dataCy={dataCy} variant={isSmallText ? '14-semibold' : '16-semibold'}>
          {text}
        </Typography>
        <div>
          ...
        </div>
      </TypoWithIcon>
      ) : (
          <LoaderCon>...</LoaderCon>
      )}
    </div>
  );


};

//functions for primary,secondary,arrow & special button.
//taking props and returning the button type.
const bigButton = (props: ButtonProp) => {
  const { loading, onClick, disabled, text, dataCy, secondary, withArrow, isSmallText } = props;
  const disableButton = disabled || loading;
  return (
    <>
      {secondary ? (
        <BigButtonPadding secondary={secondary} >
         <SecondaryButton {...props} loading={loading} disabled={disableButton} disabledClr={disabled} onClick={onClick} data-testid={dataCy}>
         {!loading && (
           <Typography dataCy={dataCy} variant={isSmallText ? '14-semibold' : '16-semibold'} color={disabled ? paletteColor05 : paletteColor03} textAlign="center">
             {text}
           </Typography>
         )}
         {bigButtonLoading(loading, secondary, isSmallText, text, dataCy)}
       </SecondaryButton>
       </BigButtonPadding>
      ) : (
        <BigButtonPadding secondary={secondary} >
        <PrimaryButton {...props} loading={loading} disabled={disableButton} disabledClr={disabled} onClick={onClick} data-testid={dataCy}>
          {!loading && (
            <>
            <Typography  dataCy={dataCy} variant={isSmallText ? '14-semibold' : '16-semibold'} color={disabled ? paletteColor15 : paletteColor03} textAlign="center">
              {text}
            </Typography>
            </>
          )}
          {bigButtonLoading(loading, secondary, isSmallText, text, dataCy)}
        </PrimaryButton>
        </BigButtonPadding>
      )}
    </>
  );
};




const errorSecondaryButton = (props: ButtonProp) => {
  const { onClick, text, dataCy, errorMsg } = props;
  return (
    <ErrorButtonPadding>
      <SecondaryButton {...props} disabled={true} disabledClr={true} onClick={onClick}>
        <Typography dataCy={dataCy} variant="16-semibold" lineHeight='1.5rem' color={paletteColor05} textAlign="center">
          {text}
        </Typography>
        <Typography dataCy={dataCy} variant="12-medium" textAlign="center" lineHeight='1.25rem' color={paletteColor14}>
          {errorMsg}
        </Typography>
      </SecondaryButton>
    </ErrorButtonPadding>
  );
};

//function based button component return the button types. Used switch cases for particular button type.
const Button = (props: ButtonProp) => {
  //As the button type particular button will render.
  const { btnType } = props;
  switch (btnType) {
    case 'errorButton':
      return errorSecondaryButton(props);
    case 'bigButton': // intentional fallback to return default bigButton
    default:
      return bigButton(props);
  }
};

export default Button;


