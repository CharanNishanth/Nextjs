import * as React from "react";
import styled from "styled-components";
import {
  paletteColor01,
  paletteColor02,
  paletteColor03,
  paletteColor04,
  paletteColor05,
  paletteColor06,
  paletteColor07,
  paletteColor08,
  paletteColor09,
  paletteColor10,
  paletteColor11,
  paletteColor12,
  paletteColor14,
  paletteColor15,
  paletteColor16,
  paletteColor18,
  paletteColor34,
  paletteColor35,
} from "../colors";

// color - only get string color mapping and only that can be passed down as prop., Also use full name, dont use 40-medium, use 40-mediumedium. Add comments in interface and
interface TypographyProps {
  /**
   * Color will be a palette color
   */
  color?:
    | typeof paletteColor01
    | typeof paletteColor02
    | typeof paletteColor03
    | typeof paletteColor04
    | typeof paletteColor05
    | typeof paletteColor06
    | typeof paletteColor07
    | typeof paletteColor08
    | typeof paletteColor09
    | typeof paletteColor10
    | typeof paletteColor11
    | typeof paletteColor12
    | typeof paletteColor14
    | typeof paletteColor15
    | typeof paletteColor16
    | typeof paletteColor18
    | typeof paletteColor34
    | typeof paletteColor35
    | "";
  /**
   * Text align can be either of left, center or right
   */
  textAlign?: "left" | "center" | "right";
  /**
   * Variant can be either of the available options
   */
  variant:
    | "40-medium"
    | "27-medium"
    | "27-regular"
    | "27-semibold"
    | "24-medium"
    | "21-semibold"
    | "21-medium"
    | "18-semibold"
    | "18-medium"
    | "17-regular"
    | "16-semibold"
    | "16-medium"
    | "15-regular"
    | "14-bold"
    | "14-semibold"
    | "14-underlined"
    | "14-medium"
    | "14-regular"
    | "12-semibold"
    | "12-capital"
    | "12-regular"
    | "12-medium"
    | "10-semibold"
    | "10-medium"
    | "9-capital"
    | "9-semibold"
    | "9-medium"
    | "8-semibold"
    | "8-medium";
  /**
   * Convert whole text inside typography to uppercase
   */
  uppercase?: boolean;
  /**
   * Show underline below text in typograph
   */
  underline?: boolean;

  /**
   * Override line-height for any font variant. Should be having !important as it should take highest precedence
   */
  lineHeight?: string;
  /**
   * Provide unique identifier for content, used for automation purpose
   */
  dataCy?: string;
  /**
   * Content between the opening and closing tags of JSX expression.
   */
  children?: React.ReactNode;
  /**
   * Add 'required field' asterisk to field label
   */
  required?: boolean;
}
const getCustomStyles = (variant: string) => {
  const medium = `
        font-weight: 500;        
    `;
  const regular = `
        font-weight: normal;
    `;
  const bold = `
        font-weight:700;
    `;

  const semibold = `
        font-weight: 600;
      `;
  const underlined = `
        font-weight: 600;
    `;
  const capital = `
        font-weight: 600;
        text-transform: uppercase;
    `;
  switch (variant) {
    case "40-medium": {
      return `
                font-size: 2.5rem;
                line-height: 1.6;
                ${medium}
            `;
    }
    case "27-medium": {
      return `
                font-size: 1.688rem;
                line-height: 1.48;
                ${medium}
            `;
    }
    case "27-regular": {
      return `
                font-size: 1.688rem;
                line-height: 1.48;
                ${regular}
            `;
    }
    case "27-semibold": {
      return `
                font-size: 1.625rem;
                line-height: 1.48;
                ${semibold}
            `;
    }
    case "24-medium": {
      return `
                font-size: 1.5rem;
                line-height: 1.5;
                ${medium}
            `;
    }
    case "21-semibold": {
      return `
                font-size: 1.312rem;
                line-height: 1.52;
                ${semibold}
            `;
    }
    case "21-medium": {
      return `
                font-size: 1.312rem;
                line-height: 1.52;
                ${medium}
            `;
    }

    case "18-semibold": {
      return `
                font-size: 1.125rem;
                line-height: 1.5;
                ${semibold}
            `;
    }
    case "18-medium": {
      return `
                font-size: 1.125rem;
                line-height: 1.5;
                ${medium}
            `;
    }
    case "17-medium": {
      return `
                font-size: 1.062rem;
                line-height: 1.41;
                ${medium}
            `;
    }
    case "17-regular": {
      return `
                font-size: 1.062rem;
                line-height: 1.41;
                ${regular}
            `;
    }
    case "16-semibold": {
      return `
                font-size: 1rem;
                line-height: 1.5;
                ${semibold}
            `;
    }
    case "16-medium": {
      return `
                font-size: 1rem;
                line-height: 1.5;
                ${medium}
            `;
    }
    case "15-regular": {
      return `
                font-size: 0.938rem;
                line-height: 1.4;
                ${regular}
            `;
    }
    case "14-semibold": {
      return `
                font-size: 0.875rem;
                line-height: 1.31;
                ${semibold}
            `;
    }
    case "14-bold": {
      return `
                font-size: 0.875rem;
                line-height: 1.31;
                ${bold}
            `;
    }
    case "14-underlined": {
      return `
                font-size: 0.875rem;
                line-height: 1.71;
                ${underlined}
            `;
    }
    case "14-medium": {
      return `
                font-size: 0.875rem;
                line-height: 1.71;
                ${medium}
            `;
    }
    case "14-regular": {
      return `
                font-size: 0.875rem;
                line-height: 1.71;
                ${regular}
            `;
    }
    case "12-semibold": {
      return `
                font-size: 0.75rem;
                line-height: 1.5;
                ${semibold}
            `;
    }
    case "12-capital": {
      return `
                font-size: 0.75rem;
                line-height: 1.67;
                ${capital}
            `;
    }
    case "12-regular": {
      return `
                font-size: 0.75rem;
                line-height: 1.25;
                ${regular}
            `;
    }
    case "12-medium": {
      return `
                font-size: 0.75rem;
                line-height: 1.5;
                ${medium}
            `;
    }
    case "10-semibold": {
      return `
                font-size: 0.625rem;
                line-height: 1.6;
                ${semibold}
            `;
    }
    case "10-medium": {
      return `
                font-size: 0.625rem;
                line-height: 1.6;
                ${medium}
            `;
    }

    case "9-capital": {
      return `
                font-size: 0.562rem;
                line-height: 1.78;
                ${capital}
            `;
    }
    case "9-semibold": {
      return `
                font-size: 0.562rem;
                line-height: 1.56;
                ${semibold}
            `;
    }
    case "9-medium": {
      return `
                font-size: 0.562rem;
                line-height: 1.56;
                ${medium}
            `;
    }
    case "8-semibold": {
      return `
                font-size: 0.5rem;
                line-height: 1.75;
                ${semibold}
            `;
    }
    case "8-medium": {
      return `
                font-size: 0.5rem;
                line-height: 1.5;
                ${medium}
            `;
    }
    default: {
      return `
                font-size: 1rem;
                line-height: 1.5;
                ${regular}
            `;
    }
  }
};

const TypographySkin = styled.div<any>`
  font-family: Montserrat;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: ${(props) => props.color || `${paletteColor03}`};
  text-align: ${(props) => props.textAlign || "left"};
  ${(props) => props.capital && "text-transform: uppercase;"}
  ${(props) => props.underline && "text-decoration: underline;"}
${(props) => getCustomStyles(props.variant)}
${(props) => props.lineHeight && `line-height : ${props.lineHeight};`}
&:after {
    ${(props) => props.required && `content:" *"; color: ${paletteColor09};`}
  }
`;

const TypographySkinForEllipses = styled.span<any>`
  font-family: Montserrat;
  display: inline-block;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: ${(props) => props.color || `${paletteColor03}`};
  text-align: ${(props) => props.textAlign || "left"};
  ${(props) => props.capital && "text-transform: uppercase;"}
  ${(props) => props.underline && "text-decoration: underline;"}
${(props) => getCustomStyles(props.variant)}
${(props) => props.lineHeight && `line-height : ${props.lineHeight};`}
`;

const Typography = (props: TypographyProps) => {
  const {
    variant = "",
    color,
    textAlign,
    uppercase = false,
    underline = false,
    lineHeight = undefined,
    dataCy,
    required = false,
  } = props;
  return (
    <TypographySkin
      className="typography-content"
      variant={variant}
      color={color}
      textAlign={textAlign}
      capital={uppercase}
      underline={underline}
      lineHeight={lineHeight}
      data-cy={dataCy}
      required={required}
    >
      {props.children}
    </TypographySkin>
  );
};

export const TypographyWithEllipses = (props: TypographyProps) => {
  const {
    variant = "",
    color,
    textAlign,
    uppercase = false,
    underline = false,
    lineHeight = undefined,
    dataCy,
  } = props;
  return (
    <TypographySkinForEllipses
      className="typography-content"
      variant={variant}
      color={color}
      textAlign={textAlign}
      capital={uppercase}
      underline={underline}
      lineHeight={lineHeight}
      data-cy={dataCy}
    >
      {props.children}
    </TypographySkinForEllipses>
  );
};

export default Typography;
