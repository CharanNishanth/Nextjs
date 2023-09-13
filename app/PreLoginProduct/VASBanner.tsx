import * as React from 'react';
import { injectIntl } from 'react-intl';
import { paletteColor11 } from '../colors';
import { StyledFlexDiv,ExtendedTSX,VASCon} from './skins';

interface VASBannerProps {
    vasBannerList: any;
    btnClick?: (id: string, productType: string) => void;
}

const VASBanner: React.FC<VASBannerProps > = props => {
    const {
      btnClick,
      vasBannerList,
    } = props;
  
    return (
      <VASCon >
        {vasBannerList.map((list: any) => {
          const { id, productName, img, productType, margin } = list;
          return (
            <StyledFlexDiv key={id} onClick={() =>console.log('clicked')} data-cy={id}>
              <img src={img} data-cy={id + '_img'} height="32px" />
              {/* <ExtendedTSX fs="10px" fw="600" clr={paletteColor11} mt="8px" data-cy={id + '_productName'}> */}
                {productName}
              {/* </ExtendedTSX> */}
            </StyledFlexDiv>
          );
        })}
      </VASCon>
    );
  };
  
  export default VASBanner;
  