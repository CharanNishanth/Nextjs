import * as React from 'react';
import { History } from 'history';
import { FormattedMessage } from 'react-intl';
import Button from '../components/Button';
import PreConfirmPdtListing from './PreConfirmPdtListing';
import {NHPCon,PdtItemsNewCon,StyledBtnCon} from './skins'

export interface PreLoginProps {
    history?: History;
    height?: any;
    padding?: any;
    margin?: string;
    isWebMob?: any;
}

export class PreLoginPdtListing extends React.Component<PreLoginProps> {
    constructor(props: Readonly<PreLoginProps>) {
      super(props);
    }
  
    render() {
      const {  padding, margin, isWebMob } = this.props;
  
      return (
        <NHPCon>
          <PdtItemsNewCon >
            <PreConfirmPdtListing margin={margin} isWebMob={isWebMob} />
            <StyledBtnCon >
                <Button text={'Login/Signup with Mobile'} onClick={() => console.log('button is clicked')} />
               
            </StyledBtnCon>
          </PdtItemsNewCon>
        </NHPCon>
      );
    }
  }
  
  export default PreLoginPdtListing;