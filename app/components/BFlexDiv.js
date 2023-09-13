import styled from 'styled-components';

const BFlexDiv = styled.div`
	display: flex;
    ${props => props.jc ? 'justify-content:'+props.jc+';' : '' }
    ${props => props.fd ? 'flex-direction:'+props.fd+';' : '' }
    ${props => props.ai ? 'align-items:'+props.ai+';' : '' }
	${props => props.wid ? 'width:'+props.wid+';' : '' }
	${props => props.height ? 'height:'+props.height+';' : '' }
	${props => (props.pt ? 'padding-top:' + props.pt + 'px;' : '')}
	${props => (props.pb ? 'padding-bottom:' + props.pb + 'px;' : '')}
    ${props => (props.pr ? 'padding-right:' + props.pr + 'px;' : '')}
	${props => (props.pl ? 'padding-left:' + props.pl + 'px;' : '')}
	${props => (props.ofy ? 'overflow-y:' + props.ofy : '')}
`

export const CADiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`


export default BFlexDiv;
