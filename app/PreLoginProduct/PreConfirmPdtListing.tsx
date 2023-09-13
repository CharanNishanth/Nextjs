import * as React from 'react';
import { History } from 'history';
import { PdtListing } from './skins';
import {useNavigate} from 'react-router-dom'
import VASBanner from './VASBanner';

export interface PreConfirmPdtListingProps {
    history?: History;
    height?: any;
    padding?: any;
    handlePdtClick?: (item: string) => any;
    margin?: string;
    isWebMob?: any;
  }

  export class PreConfirmPdtListing extends React.Component<PreConfirmPdtListingProps> {
    constructor(props: Readonly<PreConfirmPdtListingProps>) {
      super(props);
      this.handlePdtClick = this.handlePdtClick.bind(this);
    }
  
    handlePdtClick(item: string, productType: string) {
      let value = item.toString()
      let loanName = item;
      switch (value) {
        case 'fpl':
          loanName = 'Flexi Personal Loan';
          break;
        case 'checkout':
          loanName = 'Purchase on EMI';
          break;
        case 'bl':
          loanName = 'Business Loan';
          break;
        case 'ewa':
          loanName = 'Salary On Demand';
          break;
        default:
          break;
      }
     const history = useNavigate();
      switch (productType) {
        case 'vas':
          history(`${'/vas/details'}?type=${item}`);
          break;
        case 'loan':
          history(`${'/loan/details'}?type=${item}`);
          break;
        default:
          break;
      }
      if (item === 'checkout') {
        history(`${'/checkoutFinance/home'}?type=checkout`);
      }
    }
  
    // getVASBannerList() {
    //   const { preLoginVASProducts } = configGetVal('onboarding') || {};
    //   return (
    //     (preLoginVASProducts &&
    //       preLoginVASProducts.filter(
    //         (list: { enabled: number; enabledWithEwa: number; id: string }) =>
    //           (!isEWA && list.enabled != 0) || (isEWA && enableByConfig(list.enabledWithEwa, false)),
    //       )) ||
    //     []
    //   );
    // }
  
    getLoanCardList() {
      // const { preLoginLoanProducts } = configGetVal('onboarding') || {};
      // return (
      //   (preLoginLoanProducts &&
      //     preLoginLoanProducts.filter(
      //       (list: { enabled: number; enabledWithEwa: number; id: string }) =>
      //         (!isEWA && list.enabled != 0) || (isEWA && (enableByConfig(list.enabledWithEwa, false) || (list.id === 'ewa' && list.enabled != 0))),
      //     )) ||
      //   []
      // );
    
    }
  
    render() {
      const { margin, isWebMob } = this.props;
      const preLoginLoanProducts = [
        {
          enabled:1,
          id:'plsa',
          img:'https://ik.imagekit.io/kreditbee/app-static/misc/new/ic-sa.svg',
          maxAmount:400000,
          maxTenure:24,
          maxTenureClr:"#31921e",
          productName: {
            hi:'व्यक्तिगत ऋण - वेतनभोगी',
            en:'Personal Loan - Salaried'
          },
          productType:'loan'
        },
        {
          enabled:1,
          id:'plsa',
          img:'https://ik.imagekit.io/kreditbee/app-static/misc/new/ic-fpl.svg',
          maxAmount:100000,
          maxTenure:12,
          maxTenureClr:'#b756be',
          productName:{
            en: "Flexi Personal Loan",
            hi: "फ्लेक्सी पर्सनल लोन"
          },
          productType:'loan'
        }
      ];
      const preLoginVASProducts = [
        {
          enabled:1,
          id:'csr',
          img:'https://ik.imagekit.io/kreditbee/app-static/misc/ic_credit_report.svg',
          productName: 'Credit Report',
          productType:'vas'
        },
        {
          enabled:1,
          id:'gold',
          img:'https://ik.imagekit.io/kreditbee/app-static/24kGold/ic_24KGold_gold-home2.svg',
          productName : '24K Gold',
          productType:'vas'
        },
        {
          enabled:1,
          id:'em',
          img:'https://ik.imagekit.io/kreditbee/app-static/expense_manager/ic-my-expenses2.svg',
          productName :'My Expenses'
          
        }
      ]
      // const preLoginLoanProducts = this.getLoanCardList();
      return (
        <div>
          <PdtListing margin={margin || '5px 16px 16px'}>
            {/* unLocked products will display on top of page after banner */}
            {/* {preLoginLoanProducts.length > 0 &&
              preLoginLoanProducts.map((item: any, itemIndex: number) => {
               if (item.id !== 'ewa') {
                  return (
                    <LoanProductCard
                      key={itemIndex.toString()}
                      loanItem={item}
                      handlePdtClick={() => this.handlePdtClick(item.id, item.productType)}
                      dataCy={itemIndex}
                      isWebMob={isWebMob}
                    />
                  );
                }
              })} */}
          </PdtListing>
          <div>
            {preLoginVASProducts.length > 0 && <VASBanner btnClick={this.handlePdtClick} vasBannerList={preLoginVASProducts} margin={isWebMob && '8px 16px'} />}
          </div>
        </div>
      );
    }
  }
  
  export default PreConfirmPdtListing;